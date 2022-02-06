import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from './util/logger';
import { RegisterRoutes } from '../build/routes';

const app = express();
app.use(cors());
app.use(helmet());
app.use(logger);

RegisterRoutes(app);

const port = 3000;

app.listen(port, () => {
  console.info('Server listening on port 3000...');
});
