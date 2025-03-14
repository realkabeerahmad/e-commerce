import express from 'express';
import { storeModel } from "../model/store";
import { HttpError } from "../utils/errors";
import { handleError, sendResponse } from "../utils/util"

export const create = async (req: express.Request, res: express.Response) => {
    const startDtime = new Date;
    const service = 'CreateStore';
    const _ip = req.ip || "";
    try {
        const { name, description, address, phone, email, totalSales } = req.body;

        const existingStoreByName = await storeModel.findOne({ name: name });
        if (existingStoreByName) {
            throw new HttpError("ConflictError", `Store with name ${name} already exists`, 409, _ip, service, startDtime, existingStoreByName);
        }

        const store = {
            name: name,
            description: description,
            address: {
                street: address.street,
                city: address.city,
                state: address.state,
                country: address.country,
                zipCode: address.zipCode
            },
            phone: phone,
            email: email,
            totalSales: totalSales
        }

        const newStore = await storeModel.create(store);
        sendResponse(res, 201, `New store '${name}' created successfully!`, _ip, service, startDtime, newStore);
    } catch (error) {
        handleError(error, res);
    }
};

export const getAll = async (req: express.Request, res: express.Response) => {
    const startDtime = new Date;
    const service = 'getAllStore';
    const _ip = req.ip || "";
    try {
        const stores = await storeModel.find();
        if (!stores.length) {
            throw new HttpError("NotFoundError", "No stores found!", 404, _ip, service, startDtime, null);
        }
        sendResponse(res, 200, "All stores fetched successfully", _ip, service, startDtime, stores);
    } catch (error) {
        handleError(error, res);
    }
};

export const getOne = async (req: express.Request, res: express.Response) => {
    const startDtime = new Date;
    const service = 'getStore';
    const _ip = req.ip || "";
    try {
        const { id } = req.params;
        const store = await storeModel.findById({ _id: id });
        if (!store) {
            throw new HttpError("NotFoundError", `Store '${id}' not found`, 404, _ip, service, startDtime, null);
        }
        sendResponse(res, 200, "Store found successfully", _ip, service, startDtime, store);
    } catch (error) {
        handleError(error, res);
    }
};

export const updateOne = async (req: express.Request, res: express.Response) => {
    const startDtime = new Date;
    const service = 'updateStore';
    const _ip = req.ip || "";
    try {
        const { id } = req.params;
        const { name, description, address, phone, email, totalSales } = req.body;
        const _store = {
            name: name,
            description: description,
            address: {
                street: address.street,
                city: address.city,
                state: address.state,
                country: address.country,
                zipCode: address.zipCode
            },
            phone: phone,
            email: email,
            totalSales: totalSales
        }
        const store = await storeModel.findByIdAndUpdate(id, _store, { new: true });
        if (!store) {
            throw new HttpError("NotFoundError", `Store with ID '${id}' not found`, 404, _ip, service, startDtime, null);
        }

        sendResponse(res, 200, "Store updated successfully", _ip, service, startDtime, store);
    } catch (error) {
        handleError(error, res);
    }
};

export const deleteOne = async (req: express.Request, res: express.Response) => {
    const startDtime = new Date;
    const service = 'deleteStore';
    const _ip = req.ip || "";
    try {
        const { id } = req.params;
        const store = await storeModel.findByIdAndDelete(id);
        if (!store) {
            throw new HttpError("NotFoundError", `Store with ID '${id}' not found`, 404, _ip, service, startDtime, null);
        }
        sendResponse(res, 200, "Store deleted successfully", _ip, service, startDtime, store);
    } catch (error) {
        handleError(error, res);
    }
};
