import { ObjectId } from "mongodb";
import { db } from "../utils/db.js";

export class ProductRepository {
  static async findAll(query = {}) {
    const collection = db.collection("products");
    return await collection.find(query).limit(10).toArray();
  }

  static async findById(id) {
    const collection = db.collection("products");
    const productId = new ObjectId(id);
    return await collection.findOne({ _id: productId });
  }

  static async create(productData) {
    const collection = db.collection("products");
    return await collection.insertOne(productData);
  }

  static async update(id, productData) {
    const collection = db.collection("products");
    const productId = new ObjectId(id);
    return await collection.updateOne({ _id: productId }, { $set: productData });
  }

  static async delete(id) {
    const collection = db.collection("products");
    const productId = new ObjectId(id);
    return await collection.deleteOne({ _id: productId });
  }
}
