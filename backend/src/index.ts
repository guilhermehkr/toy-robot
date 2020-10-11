import { Request, Response } from 'express';
import express from 'express';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5000;
const frontendPath = isProduction ? '../frontend/build' : '../../frontend/build';

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, frontendPath)));

// Answer API requests.
app.get('/api', (req: Request, res: Response) => {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (request: Request, response: Response) => {
    response.sendFile(path.resolve(__dirname, frontendPath, 'index.html'));
});

app.listen(PORT,  () => {
    console.log(`Node ${isProduction ? 'server' : 'dev server'} listening on port ${PORT}`);
});
