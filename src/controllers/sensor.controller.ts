import { Request, Response } from 'express';
import db from '../models';

/** Extract sensor from db */
const Sensor = db.sensors;

/**
 * Create a new record for the sensor
 */
export const create = (req: Request, res: Response) => {
  // Validate the request
  if (!req.body.date) {
    res.status(400).send({ message: 'Date cannot be empty' });
  }

  // Create a new sensor record
  const sensor = new Sensor({
    date: req.body.date,
    sensor1: req.body.sensor1,
    sensor2: req.body.sensor2,
    sensor3: req.body.sensor3,
    sensor4: req.body.sensor4,
  });

  /** Save the sensor record */
  sensor
    .save(sensor)
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || 'Error occoured while saving sensor data',
      });
    });
};

/**
 * Store directly to db
 */
export const saveHistory = (data: any) => {
  const sensor = new Sensor({
    ...data,
  });

  sensor.save(sensor).catch((err: any) => {
    console.error('Error occoured while saving sensor data');
  });
};

/**
 * Get all record available for the sensors
 */
export const getAll = (req: Request, res: Response) => {
  Sensor.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || 'Error occoured while fetching sensor data',
      });
    });
};
