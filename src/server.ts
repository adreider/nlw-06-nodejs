import "reflect-metadata";
import express from 'express';
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

import "./database"

app.listen(3000, () => {
  console.log('Server is running!')
})
