import 'reflect-metadata';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import logger from './util/logger';
import { RegisterRoutes } from '../build/routes';
import errorMiddleware from './middleware/error.middleware';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(logger);

app.use('/spec', swaggerUi.serve, async (_req: Request, res: Response) =>
  res.send(swaggerUi.generateHTML(await import('../build/swagger.json')))
);

RegisterRoutes(app);
app.use(errorMiddleware);

const port = 3000;

app.listen(port, () => {
  console.info('Server listening on port 3000...');
});
