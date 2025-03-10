import express from 'express'
import { productModel } from "../model/products";
import { HttpError } from '../utils/errors';
import { sendResponse, handleError } from "../utils/util";

export const create = async (req: express.Request, res: express.Response) => {
  try {
    const { name, description, quantity, unitPrice, store, category, variants } = req.body;
    const Product = {
      name: name,
      description: description,
      quantity: {
        available: quantity.available,
        sold: quantity.sold,
      },
      unitPrice: {
        price: unitPrice.price,
        unit: unitPrice.unit
      },
      store: store,
      category: category,
      variants: variants
    };
    const newProduct = await productModel.create(Product);
    sendResponse(res, 201, `Product with name '${name}' added in store`, newProduct);
  } catch (error) {
    handleError(error, res);
  }
};

export const getAll = async (req: express.Request, res: express.Response) => {
  try {
    const products = await productModel.find({});
    if (products.length <= 0) throw new HttpError("NotFoundError", "No products found!", 404, null);
    sendResponse(res, 200, 'Products Fetched successfully!', products);
  } catch (error) {
    handleError(error, res);
  }
};

export const getOne = (req: express.Request, res: express.Response) => {
  let http_status = 200;
  let message = "End point is working.";
  try {
    sendResponse(res, http_status, message, null);
  } catch (error) {
    handleError(error, res);
  }
};

export const updateOne = (req: express.Request, res: express.Response) => {
  let http_status = 200;
  let message = "End point is working.";
  try {
    sendResponse(res, http_status, message, null);
  } catch (error) {
    handleError(error, res);
  }
};

export const deleteOne = (req: express.Request, res: express.Response) => {
  let http_status = 200;
  let message = "End point is working.";
  try {
    sendResponse(res, http_status, message, null);
  } catch (error) {
    handleError(error, res);
  }
};