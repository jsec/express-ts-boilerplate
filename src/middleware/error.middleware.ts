/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { isBoom } from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (isBoom(error)) {
    return res.status(error.output.statusCode).json({
      message: error.message
    });
  }

  if (error instanceof Error) {
    return res.status(500).json({
      message: error.message
    });
  }

  next();
};

export default errorMiddleware;
