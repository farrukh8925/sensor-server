import mongoose from 'mongoose';
import dbConfig from '../config/db.config';
import { Sensor } from './sensor';

mongoose.Promise = global.Promise;

const db = {
  mongoose,
  url: dbConfig.url,
  sensors: Sensor,
};

export default db;
