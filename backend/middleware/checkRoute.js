function checkRoute(req, res, next) {
  console.log(req.url);
  if (req.url === "/news") {
    req.objType = "news";
  } else if (req.url === "/blog") {
    req.objType = "blog";
  }

  next();
}

module.exports = { checkRoute };
