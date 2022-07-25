exports.getIndexPage = (req, res, next) => {
  res.render("view_index", { pageTitle: "File Upload" });
};

exports.postIndexPage = (req, res, next) => {
  const file = req.file;
  console.log(file);
  res.redirect("/");
};
