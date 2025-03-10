import { categoryModel } from "../model/category.js";
import { HttpError } from "../utils/errors.js";
import { handleError, sendResponse } from "../utils/util.js"


export const create = async (req, res) => {
    try {
        const { name, description, parent } = req.body;
        const _name = name.toLowerCase();

        const existingCategoryByName = await categoryModel.findOne({ name: _name });
        if (existingCategoryByName) {
            throw new HttpError("ConflictError", `Category with name ${_name} already exists`, 409, existingCategoryByName);
        }

        if (parent && parent.length > 0) {
            const existingParent = await categoryModel.findById(parent)
            if (!existingParent) {
                throw new HttpError("NotFoundError", `Parent category with id ${parent} do not exists`, 404);
            }
        }

        const newCategory = await categoryModel.create({ name: _name, description, parent });
        sendResponse(res, 201, `New category '${_name}' created successfully!`, newCategory);
    } catch (error) {
        handleError(error, res);
    }
};

export const getAll = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        if (!categories.length) {
            throw new HttpError("NotFoundError", "No categories found!", 404);
        }
        sendResponse(res, 200, "All categories fetched successfully", categories);
    } catch (error) {
        handleError(error, res);
    }
};

export const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findOne({ name: id });
        if (!category) {
            throw new HttpError("NotFoundError", `Category '${id}' not found`, 404);
        }
        sendResponse(res, 200, "Category found successfully", category);
    } catch (error) {
        handleError(error, res);
    }
};

export const updateOne = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, parent } = req.body;
        const _name = name?.toLowerCase();

        const category = await categoryModel.findByIdAndUpdate(id, { _name, description, parent }, { new: true });
        if (!category) {
            throw new HttpError("NotFoundError", `Category with ID '${id}' not found`, 404);
        }

        sendResponse(res, 200, "Category updated successfully", category);
    } catch (error) {
        handleError(error, res);
    }
};

export const deleteOne = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findByIdAndDelete(id);
        if (!category) {
            throw new HttpError("NotFoundError", `Category with ID '${id}' not found`, 404);
        }
        sendResponse(res, 200, "Category deleted successfully", category);
    } catch (error) {
        handleError(error, res);
    }
};
