import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

export const sendCategories = async (req, res) => {
  const data = req.body;
  const newCategory = new Category({
    name: data.name,
    image: data.image,
  });

  await newCategory.save();

  res.status(200).json("Done");
};

export const getProducts = async (req, res) => {
  try {
    const query = req.params.id;

    const products = await Product.find({ type: query });

    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

export const sendProducts = async (req, res) => {
  const data = req.body;
  const newProduct = new Product({
    name: data.name,
    type: data.type,
    image: data.image,
  });

  await newProduct.save();

  res.status(200).json("Done");
};
