import { Router } from 'express';

const messages = [
    {
        text: 'Hi there!',
        user: 'Amanda',
        added: new Date()
    },
    {
        text: 'Hello world!',
        user: 'Charles',
        added: new Date()
    }
];

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
});

export { indexRouter, messages };