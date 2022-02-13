import 'reflect-metadata';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';
import errorMiddleware from './middleware/error.middleware';
import loggerMiddleware from './middleware/logger.middleware';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(loggerMiddleware);

app.use('/spec', swaggerUi.serve, async (_req: Request, res: Response) =>
  res.send(swaggerUi.generateHTML(await import('../build/swagger.json')))
);

RegisterRoutes(app);
app.use(errorMiddleware);

export default app;
