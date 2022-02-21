import express from 'express';
import main from './routes/index';
import painel from './routes/painel';

const server = express();

server.use(main);
server.use('/painel', painel);

server.listen(3000);