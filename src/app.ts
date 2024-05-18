import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modues/student/student.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// app routes
app.use('/api/v1/students', StudentRoutes);

// Home route
app.get('/', (req: Request, res: Response) => {
  const greeting = 'Hello World!';
  res.send(greeting);
});

export default app;
