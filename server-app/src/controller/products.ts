import express from 'express'
import { productModel } from "../model/products";
import { HttpError } from '../utils/errors';
import { sendResponse, handleError } from "../utils/util";
import { product1sModel } from '../model/product1s';

export const create = async (req: express.Request, res: express.Response) => {
  const startDtime = new Date;
  const service = 'CreateStore';
  const _ip = req.ip || "";
  try {
    const { name, description, store, category, shelfed } = req.body;
    const Product = {
      name: name,
      description: description,
      store: store,
      category: category,
      shelfed: shelfed
    };
    const newProduct = await productModel.create(Product);
    sendResponse(res, 201, `Product with name '${name}' added in store`, _ip, service, startDtime, newProduct);
  } catch (error) {
    handleError(error, res);
  }
};

export const getAll = async (req: express.Request, res: express.Response) => {
  const startDtime = new Date;
  const service = 'CreateStore';
  const _ip = req.ip || "";
  try {
    const products = await productModel.find({}).populate("category", "name -_id").populate("store", "name -_id");
    if (products.length <= 0) throw new HttpError("NotFoundError", "No products found!", 404, _ip, service, startDtime, null);
    sendResponse(res, 200, 'Products Fetched successfully!', _ip, service, startDtime, products);
  } catch (error) {
    handleError(error, res);
  }
};

export const getOne = async (req: express.Request, res: express.Response) => {
  const startDtime = new Date;
  const service = 'CreateStore';
  const _ip = req.ip || "";
  try {
    const { id } = req.params
    const product = await productModel.findById({ _id: id }).populate("category", "name -_id").populate("store", "name -_id");
    if (!product) throw new HttpError("NotFoundError", "Product not found!", 404, _ip, service, startDtime, null)
    sendResponse(res, 200, "Product Fetched Successfully", _ip, service, startDtime, product);
  } catch (error) {
    handleError(error, res);
  }
};

export const updateOne = async (req: express.Request, res: express.Response) => {
  const startDtime = new Date;
  const service = 'CreateStore';
  const _ip = req.ip || "";
  try {
    const { id } = req.params
    const { name, description, store, category, shelfed } = req.body;
    const Product = {
      name: name,
      description: description,
      store: store,
      category: category,
      shelfed: shelfed
    };

    const product = await productModel.findByIdAndUpdate(id, Product, { new: true });
    if (!product) {
      throw new HttpError("NotFoundError", `Product with ID '${id}' not found`, 404, _ip, service, startDtime, null);
    }
    sendResponse(res, 200, "Product Updated successfully!", _ip, service, startDtime, product);
  } catch (error) {
    handleError(error, res);
  }
};

export const deleteOne = (req: express.Request, res: express.Response) => {
  const startDtime = new Date;
  const service = 'CreateStore';
  const _ip = req.ip || "";
  let http_status = 200;
  let message = "End point is working.";
  try {
    sendResponse(res, http_status, message, _ip, service, startDtime, null);
  } catch (error) {
    handleError(error, res);
  }
};



export const updateDetail = async (req: express.Request, res: express.Response) => {
  const startDtime = new Date;
  const service = 'CreateStore';
  const _ip = req.ip || "";
  try {
    const { id } = req.params
    const { name, description, quantity, unitPrice, colors, dimensions, weight, size, shelfed } = req.body;
    const _productDetail = {
      name: name,
      description: description,
      quantity: {
        available: quantity.available,
        sold: quantity.sold
      },
      unitPrice: {
        price: unitPrice.price,
        currency: unitPrice.currency,
      },
      colors: colors,
      dimensions: {
        length: dimensions.length,
        width: dimensions.width,
        height: dimensions.height,
        unit: dimensions.unit
      },
      weight: { value: weight.value, unit: weight.unit },
      size: size,
      shelfed: shelfed
    };
    const productDetail = await product1sModel.findByIdAndUpdate(id, _productDetail, { new: true });
    sendResponse(res, 201, `Product Details for product id '${id}' added in store`, _ip, service, startDtime, productDetail);
  } catch (error) {
    handleError(error, res);
  }
};

export const createDetail = async (req: express.Request, res: express.Response) => {
  const startDtime = new Date;
  const service = 'CreateStore';
  const _ip = req.ip || "";
  try {
    const { id } = req.params
    const { name, description, quantity, unitPrice, colors, dimensions, weight, size, shelfed } = req.body;
    const productDetail = {
      name: name,
      description: description,
      quantity: {
        available: quantity.available,
        sold: quantity.sold
      },
      unitPrice: {
        price: unitPrice.price,
        currency: unitPrice.currency,
      },
      colors: colors,
      dimensions: {
        length: dimensions.length,
        width: dimensions.width,
        height: dimensions.height
      },
      weight: weight,
      size: size,
      product: id,
      shelfed: shelfed
    };
    const newProductDetail = await product1sModel.create(productDetail);
    sendResponse(res, 201, `Product Details for product id '${id}' added in store`, _ip, service, startDtime, newProductDetail);
  } catch (error) {
    handleError(error, res);
  }
};