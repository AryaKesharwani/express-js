const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes");
const productRouter = require("./routes/products");

app.set("view engine", "ejs");
// console.log(app.get('view engine')); // ejs
// app.set("views", path.resolve(__dirname)+ "/templates");
// console.log(app.get("views"));

// app.use(apiKeyMiddleware); // global middlewares
app.use(express.static("public")); // for css files and static contains like images

app.use(mainRouter);
app.use(productRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
