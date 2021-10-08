const router = require("express").Router();
const products=require('../productData')

router.get("/products", (req, res) => {
  res.render("products", {
    title: "My Product Page",
  });
});

router.get("/api/products", (req, res) => {
  res.json(products);
});

module.exports = router;
