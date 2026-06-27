import express from 'express';
import path from 'path';
import { indexRouter } from './routes/indexRouter.js';
import { newMessageRouter } from './routes/newMessageRouter.js';

const app = express();
const assetsPath = path.join(import.meta.dirname, 'public');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/new', newMessageRouter);
app.use('/', indexRouter);

app.listen(process.env.PORT, (error) => {
    console.log(`Server is running on port ${process.env.PORT}`);
})