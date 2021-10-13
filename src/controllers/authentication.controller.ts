import { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { instance as axios } from '../utils/fetcher';

/**
 * Login Method
 */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  /** In case username is missing */
  if (!email) {
    res.status(400).send('Invalid Request, Email not provided !');
  }

  /** In case password is missing */
  if (!password) {
    res.status(400).send('Invalid Request, Password not provided !');
  }

  /** Try to get the auth token */
  try {
    const request = await axios.post('/login', req.body, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (request && request.data) {
      res.status(200).send(request.data);
    }
  } catch (err) {
    res.status(401).send(err);
  }
};

/**
 * Register user
 */
export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  /** In case username is missing */
  if (!email) {
    res.status(400).send('Invalid Request, Email not provided !');
  }

  /** In case password is missing */
  if (!password) {
    res.status(400).send('Invalid Request, Password not provided !');
  }

  /** Try to get the auth token */
  try {
    const request = await axios.post('/signup', req.body, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (request && request.data) {
      res.status(200).send(request.data);
    }
  } catch (err) {
    res.status(401).send(err);
  }
};
