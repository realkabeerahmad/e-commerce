import express from "express";
import {
  create,
  getOne,
  getAll,
  updateOne,
  deleteOne,
} from "../controller/products.js";
const products = express.Router();

products.post("/", create);
products.get("/", getAll);
products.get("/:id", getOne);
products.put("/:id", updateOne);
products.delete("/:id", deleteOne);

export default products;
