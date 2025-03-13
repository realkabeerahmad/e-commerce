import express from "express";
import {
  create,
  getOne,
  getAll,
  updateOne,
  deleteOne,
  createDetail,
  updateDetail
} from "../controller/products";
const products = express.Router();

products.post("/", create);
products.get("/", getAll);
products.get("/:id", getOne);
products.put("/:id", updateOne);
products.delete("/:id", deleteOne);
products.post("/detail/:id", createDetail);
products.put("/detail/:id", updateDetail);

export default products;
