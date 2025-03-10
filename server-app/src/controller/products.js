import { productModel } from "../model/products.js";
import { sendResponse, handleError } from "../utils/util.js";

export const create = async (req, res, next) => {
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
    handleError(res, error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const products = await productModel.find({});
    if(products.length <= 0) sendResponse(res, 404, 'Products not Found!', data = null);
    sendResponse(res, 200, 'Products Fetched successfully!', data = products);
  } catch (error) {
    handleError(error, res);
  }
};

export const getOne = (req, res, next) => {
  let http_status = 200;
  let message = "End point is working.";
  try {
    sendResponse(res, message, http_status, data);
  } catch (error) {
    handleError(error, res);
  }
};

export const updateOne = (req, res, next) => {
  let http_status = 200;
  let message = "End point is working.";
  try {
    sendResponse(res, message, http_status, data);
  } catch (error) {
    handleError(error, res);
  }
};

export const deleteOne = (req, res, next) => {
  let http_status = 200;
  let message = "End point is working.";
  try {
    sendResponse(res, message, http_status, data);
  } catch (error) {
    handleError(error, res);
  }
};