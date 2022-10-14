const FIREBASE_DOMAIN = "https://staytuned-project-default-rtdb.firebaseio.com";

export const getProducts = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}/productList.json`);
  const data = await response.json();


  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  const transformedProducts = [];

  for (const key in data) {
    const productObj = {
      id: key,
      ...data[key],
    };
    transformedProducts.push(productObj);
  }

  return transformedProducts;
};

export const getSingleProduct = async (productId) => {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/productList/${productId}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch product.");
  }

  const loadedProduct = {
    id: productId,
    ...data,
  };

  return loadedProduct;
};
