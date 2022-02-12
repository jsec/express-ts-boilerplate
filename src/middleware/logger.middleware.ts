import consola from 'consola';
import { NextFunction, Request, Response } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.on('finish', () => {
    const message = `${req.method} ${req.url} - ${res.statusCode}`;

    // Don't need to handle 500s, error middleware covers that
    if (res.statusCode >= 400 && res.statusCode < 500) {
      consola.warn(message);
    }

    if (res.statusCode >= 200 && res.statusCode < 400) {
      consola.success(message);
    }
  });

  next();
};

export default loggerMiddleware;
