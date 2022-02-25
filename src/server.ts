import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import main from './routes/index';
import painel from './routes/painel';

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));

server.use(main);
server.use('/painel', painel);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);