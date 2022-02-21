import express, { Request, Response } from 'express';
import main from './routes/index';
import painel from './routes/painel';

const server = express();

server.use(main);
server.use('/painel', painel);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});

server.listen(3000);