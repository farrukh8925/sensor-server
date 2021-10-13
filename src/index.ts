require('dotenv').config();
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import schedule from 'node-schedule';

import db from './models';
import { AuthenticationRoute, SensorRoute } from './routes';
import historyRunner from './runners/history';

/** Express application */
const app: Express = express();

/** Database connection */
console.log(db.url);

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err: any) => {
    console.log('Cannot connect to the database', err);
    process.exit();
  });

/** Extend application to use cors */
app.use(cors());

/** Extend appication to use body-parser */
app.use(bodyParser.json());

/** Assign the routes to the application */
app.use('/api/v1/sensor', SensorRoute);
app.use('/api/v1/user', AuthenticationRoute);

/** Call the history runner once */
schedule.scheduleJob('5 0 */1 * * *', () => {
  historyRunner();
});

/** Start the server */
app.listen(process.env.NODE_DOCKER_PORT || 8000, () => {
  console.info(
    `Server started running on port ${process.env.NODE_DOCKER_PORT || 8000}`,
  );
});
