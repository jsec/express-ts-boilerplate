/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */

import consola from 'consola';
import { isBoom } from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (isBoom(error)) {
    consola.warn(`${req.method} ${req.url} - ${error.output.statusCode}`);
    return res.status(error.output.statusCode).json({
      message: error.message
    });
  }

  if (error instanceof Error) {
    consola.error(error);
    return res.status(500).json({
      message: error.message
    });
  }

  next();
};

export default errorMiddleware;
