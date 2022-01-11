import cors from 'cors';
import express from 'express';
import helmet from "helmet";
import pino from "express-pino-logger";
import { useExpressServer } from "routing-controllers";
import { ExampleController } from "./example/example.controller";

const app = express();
app.use(cors());
app.use(helmet());
app.use(pino());

useExpressServer(app, {
  controllers: [ExampleController]
});

const port = 3000;

app.listen(port, () => {
  console.log("Server listening on port 3000...");
});
