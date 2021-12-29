
import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App  from "./src/app";
import * as config from './src/ormconfig';
import AuthenticationController from './src/api/authentication/authentication.controller';


(async () => {
  try {
    const connection = await createConnection(config);
    await connection.runMigrations();
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      new AuthenticationController(),

    ],
  );
  app.listen();
})();