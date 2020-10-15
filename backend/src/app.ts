import { Request, Response } from 'express';
import express from 'express';
import path from 'path';
import { play } from './game/robot';
import { loadExample } from './load-example';

const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5000;
const frontendPath = isProduction ? '../frontend/build' : '../../frontend/build';

const app = express();

app.use(express.static(path.resolve(__dirname, frontendPath)));

app.get('/api/play', (request: Request, response: Response) => {

    const commands = request.query.commands as string;
    const result = play(commands);

    response.send(result);
});

app.get('/api/example', (request: Request, response: Response) => {
    response.send(loadExample());
});

app.get('*', (request: Request, response: Response) => {
    response.sendFile(path.resolve(__dirname, frontendPath, 'index.html'));
});

app.listen(PORT,  () => {
    console.log(`Node ${isProduction ? 'server' : 'dev server'} listening on port ${PORT}`);
});
