import { Request, Response } from 'express';
import express from 'express';
import path from 'path';

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../../frontend/build')));

// Answer API requests.
app.get('/api', (req: Request, res: Response) => {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (request: Request, response: Response) => {
    response.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
});

app.listen(PORT,  () => {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
});
