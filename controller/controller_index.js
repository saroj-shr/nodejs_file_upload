exports.getIndexPage = (req, res, next) => {
  res.render('view_index', {pageTitle: 'File Upload'})
};