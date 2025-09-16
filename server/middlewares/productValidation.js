export class ProductValidation {
  static validateProduct(req, res, next) {
    const { name, price, image, description, category } = req.body;
    
    // Validate name
    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ message: "Name is required and must be a non-empty string" });
    }
    
    // Validate price
    if (!price || typeof price !== "number" || price <= 0) {
      return res.status(400).json({ message: "Price is required and must be a number greater than 0" });
    }
    
    // Validate image
    if (!image || typeof image !== "string" || image.trim() === "") {
      return res.status(400).json({ message: "Image is required and must be a non-empty string" });
    }
    
    // Validate description
    if (!description || typeof description !== "string" || description.trim() === "" || description.length < 10) {
      return res.status(400).json({ message: "Description is required, must be a non-empty string, and must be at least 10 characters long" });
    }
    
    // Validate category
    if (!category || typeof category !== "string" || category.trim() === "") {
      return res.status(400).json({ message: "Category is required and must be a non-empty string" });
    }
    
    next();
  }
}
