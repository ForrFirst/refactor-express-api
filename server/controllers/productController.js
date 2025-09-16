import { ProductService } from "../services/productService.js";

export class ProductController {
  static async getAllProducts(req, res) {
    try {
      const name = req.query.keywords;
      const category = req.query.category;
      const allProducts = await ProductService.getAllProducts(name, category);
      return res.json({ data: allProducts });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  }

  static async getProductById(req, res) {
    try {
      const productById = await ProductService.getProductById(req.params.id);
      return res.json({ data: productById });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  }

  static async createProduct(req, res) {
    try {
      const { name, price, image, description, category } = req.body;
      const productData = { name, price, image, description, category };
      const newProductData = await ProductService.createProduct(productData);
      return res.json({
        message: `Product Id ${newProductData.insertedId} has been created successfully`,
      });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  }

  static async updateProduct(req, res) {
    try {
      const { name, price, image, description, category } = req.body;
      const productData = { name, price, image, description, category };
      await ProductService.updateProduct(req.params.id, productData);
      return res.json({
        message: `Product record ${req.params.id} has been updated successfully`,
      });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  }

  static async deleteProduct(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);
      return res.json({
        message: `Product record ${req.params.id} has been deleted successfully`,
      });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  }
}
