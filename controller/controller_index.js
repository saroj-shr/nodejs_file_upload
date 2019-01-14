exports.getIndexPage = (req, res, next) => {
  res.render('view_index', {pageTitle: 'File Upload'})
};

exports.postIndexPage = (req, res, next) => {
  const title = req.body.title;
  const file = req.file;
  
  console.log(title, file);
  
  res.redirect('/');
};