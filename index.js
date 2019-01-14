import { join } from 'path';

import express, { static } from 'express';
import { urlencoded } from 'body-parser';

//importing routes
import { publicRoutes } from "./routes/publicRoutes";

const app = express();

app.set('view engine', 'ejs');
app.set('views');

app.use(static(join(__dirname, 'node_modules/bootstrap/dist')));
app.use(static(join(__dirname, 'node_modules/jquery/dist')));
app.use(static(join(__dirname, 'node_modules/popper.js/dist')));
app.use(static(join(__dirname, 'public')));

app.use(urlencoded({ extended: false }));

app.use(publicRoutes);

app.use(
    (req, res, next) => {
        console.log('we are here!!');
    }
);


app.listen(4000);