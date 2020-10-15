import express, { json } from 'express';
import cors from 'cors';
import './database/connection';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

const app = express();
app.use(cors());
app.use(json());

app.post<Orphanage>('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  }: Orphanage = request.body;

  const orphanagesRepository = getRepository(Orphanage);
  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });
  await orphanagesRepository.save(orphanage);

  return response.status(201).json(orphanage);
});

app.listen(3333);
