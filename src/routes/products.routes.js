const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const verifYUserAuthorization = require("../middlewares/verifyUserAuthorization");

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.get("/", productsController.index);
productsRoutes.post("/", verifYUserAuthorization("admin"), productsController.create);

module.exports = productsRoutes;