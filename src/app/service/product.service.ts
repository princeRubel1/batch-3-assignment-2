import { Product } from "../interface/product.interface";
import { ProductModel } from "../model/product.model";

//created product
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
//get all product
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
//get single product
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
};