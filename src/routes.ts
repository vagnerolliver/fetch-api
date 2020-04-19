import express, { Request, Response } from 'express';

const routes = express.Router();

routes.get('/teste', (req, res) => {
    // request para api breakbad
    return res.send('Hello World')
})

export default routes;
