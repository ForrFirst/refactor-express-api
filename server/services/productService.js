import { ProductRepository } from "../repositories/productRepository.js";

export class ProductService {
  static async getAllProducts(name, category) {
    const query = {};
    if (name) {
      query.name = new RegExp(name, "i");
    }
    if (category) {
      query.category = new RegExp(category, "i");
    }
    return await ProductRepository.findAll(query);
  }

  static async getProductById(id) {
    return await ProductRepository.findById(id);
  }

  static async createProduct(productData) {
    const dataWithTimestamp = { ...productData, created_at: new Date() };
    return await ProductRepository.create(dataWithTimestamp);
  }

  static async updateProduct(id, productData) {
    const dataWithTimestamp = { ...productData, modified_at: new Date() };
    return await ProductRepository.update(id, dataWithTimestamp);
  }

  static async deleteProduct(id) {
    return await ProductRepository.delete(id);
  }
}
