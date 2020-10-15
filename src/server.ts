import express, { json } from 'express';
import cors from 'cors';

interface IUsers {
  name: string;
}

const app = express();
app.use(cors());
app.use(json());

const users: IUsers[] = [
  { name: 'Alexandre' },
  { name: 'Aclisio' },
  { name: 'Arthur' },
  { name: 'Maria' },
];

app.get('/', (request, response) => {
  response.json({ message: 'Rota acessada' });
});

app.get('/users', (request, response) => {
  response.json(users);
});

app.post<IUsers[]>('/users', async (request, response) => {
  const data = request.body;
  users.push(data);
  response.json(users);
});

app.listen(3333);
