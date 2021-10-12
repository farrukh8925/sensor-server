import { API_ROUTES } from '../constants/apiConfig';
import { saveHistory } from '../controllers/sensor.controller';
import { instance } from '../utils/fetcher';

export default async () => {
  await instance
    .get(API_ROUTES.events, {
      headers: { Authorization: `Bearer ${process.env.APPLICATION_TOKEN}` },
    })
    .then((response) => {
      console.log(response.data);

      saveHistory(response.data);
    });
};
