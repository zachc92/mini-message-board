import { Router } from 'express';
import { messages } from './indexRouter.js';

const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
    res.render('newMessageForm');
});

newMessageRouter.post('/', (req, res) => {
    messages.push({ text: req.body.message, user: req.body.user, added: new Date() });
    res.redirect('/');
});

export { newMessageRouter };