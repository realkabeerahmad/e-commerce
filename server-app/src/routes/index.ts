import express from "express";
import products from "./products";
import category from "./category";
import store from "./store";
// import users from "./users";

const index = express.Router();

index.use("/products", products);
index.use("/category", category);
index.use("/store", store);
// index.use("/users", users);

export default index;
