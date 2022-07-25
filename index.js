const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const publicRoutes = require('./routes/publicRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views');

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/popper.js/dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime()+'_'+file.originalname);
    }
});

const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('file'));

app.use(publicRoutes);

app.use(
    (req, res, next) => {
        res.status(404).render('404', {pageTitle: '404 page not found'})
    }
);


app.listen(4000, (cb) =>{
  console.log("Server running at : localhost:4000")
});