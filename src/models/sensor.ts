import mongoose from 'mongoose';

/**
 * Creating sensor data schema
 */
const sensorSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  sensor1: {
    type: Number,
    required: true,
  },
  sensor2: {
    type: Number,
    required: true,
  },
  sensor3: {
    type: Number,
    required: true,
  },
  sensor4: {
    type: Number,
    required: true,
  },
});

const Sensor = mongoose.model('Sensor', sensorSchema);

export { Sensor };
