import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import { sequelize } from './database/mysql';
import { mongoConnect } from './database/mongo';
import main from './routes/index';
import painel from './routes/painel';

dotenv.config();

mongoConnect();

sequelize.authenticate().then(() => {
    console.log("Conexão estabelecida com sucesso.");
}).catch ((err)=>{
    console.log("Erro: ", err);
});

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use('api/', main);
server.use('/painel', painel);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);