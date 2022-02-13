import consola from 'consola';
import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { EXPRESS_PORT } = process.env;

app.listen(EXPRESS_PORT, () => {
  consola.ready(`Server listening on port ${EXPRESS_PORT}...`);
});
