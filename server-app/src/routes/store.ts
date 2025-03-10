import express from "express";
import {
  create,
  getOne,
  getAll,
  updateOne,
  deleteOne,
} from "../controller/store";
const store = express.Router();

store.post("/", create);
store.get("/", getAll);
store.get("/:id", getOne);
store.put("/:id", updateOne);
store.delete("/:id", deleteOne);

export default store;
