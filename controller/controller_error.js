exports.get404errorPage = (req, res, next) => {
    res.render('view_error_404', {pageTitle: '404 Error'})
};