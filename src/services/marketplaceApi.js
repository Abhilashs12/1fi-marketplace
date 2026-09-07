import products from "../data/products";

const wait = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const getProducts = async () => {
  await wait(500);
  return products;
};

export const getProduct = async (id) => {
  await wait(500);

  const product = products.find((item) => item.id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};