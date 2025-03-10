import express from "express";
import {
  create,
  getOne,
  getAll,
  updateOne,
  deleteOne,
} from "../controller/category";
const category = express.Router();

category.post("/", create);
category.get("/", getAll);
category.get("/:id", getOne);
category.put("/:id", updateOne);
category.delete("/:id", deleteOne);

export default category;
