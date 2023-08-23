const http = require("http");
const ProductController = require("./controllers/product.controller");

http
  .createServer((req, res) => {
    if (req.url == "/api/all-product" && req.method == "GET") {
      ProductController.getAll(req, res);
    }
  })
  .listen(3000);
