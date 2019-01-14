const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const publicRoutes = require('./routes/publicRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views');

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/popper.js/dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(publicRoutes);

app.use(
    (req, res, next) => {
        res.status(404).render('404', {pageTitle: '404 page not found'})
    }
);


app.listen(4000);