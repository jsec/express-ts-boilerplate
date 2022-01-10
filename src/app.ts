import cors from "cors";
import helmet from "helmet";
import pino from "express-pino-logger";
import { createExpressServer } from "routing-controllers";
import { ExampleController } from "./example/example.controller";

const app = createExpressServer({
  controllers: [ExampleController],
});

const port = 3000;

app.use(cors());
app.use(helmet());
app.use(pino());

app.listen(port, () => {
  console.log("Server listening on port 3000...");
});
