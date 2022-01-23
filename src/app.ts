import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { useContainer, useExpressServer } from 'routing-controllers';
import { container } from 'tsyringe';
import logger from './util/logger';
import { TsyringeAdapter } from './util/di-container.adapter';
import { ExampleController } from './api/example/example.controller';

const app = express();
app.use(cors());
app.use(helmet());
app.use(logger);

useContainer(new TsyringeAdapter(container));

useExpressServer(app, {
  controllers: [ExampleController]
});

const port = 3000;

app.listen(port, () => {
  console.info('Server listening on port 3000...');
});
