import express from "express";
import products from "./products.js";
import category from "./category.js";
import store from "./store.js";
// import users from "./users.js";

const index = express.Router();

index.use("/products", products);
index.use("/category", category);
index.use("/store", store);
// index.use("/users", users);

export default index;
