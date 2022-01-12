import 'reflect-metadata';
import cors from "cors";
import express from "express";
import helmet from "helmet";
import logger from "./util/logger";
import { useContainer, useExpressServer } from "routing-controllers";
import { ExampleController } from "./example/example.controller";
import { TsyringeAdapter } from "./util/di-container.adapter";
import { container } from "tsyringe";

const app = express();
app.use(cors());
app.use(helmet());
app.use(logger);

useContainer(new TsyringeAdapter(container));

useExpressServer(app, {
  controllers: [ExampleController],
});

const port = 3000;

app.listen(port, () => {
  console.info("Server listening on port 3000...");
});
