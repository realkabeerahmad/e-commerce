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
    const products = await productModel.find({}).populate("category", "name -_id").populate("store", "name -_id");
    if (products.length <= 0) throw new HttpError("NotFoundError", "No products found!", 404, null);
    sendResponse(res, 200, 'Products Fetched successfully!', products);
  } catch (error) {
    handleError(error, res);
  }
};

export const getOne = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params
    const product = await productModel.findById({ _id: id }).populate("category", "name -_id").populate("store", "name -_id");
    if (!product) throw new HttpError("NotFoundError", "Product not found!", 404, null)
    sendResponse(res, 200, "Product Fetched Successfully", product);
  } catch (error) {
    handleError(error, res);
  }
};

export const updateOne = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params
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

    const product = await productModel.findByIdAndUpdate(id, Product, { new: true });
    if (!product) {
      throw new HttpError("NotFoundError", `Product with ID '${id}' not found`, 404, null);
    }
    sendResponse(res, 200, "Product Updated successfully!", product);
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


export const deleteAll = (req: express.Request, res: express.Response) => {
  try {
    productModel.find
  } catch (error) {

  }
}