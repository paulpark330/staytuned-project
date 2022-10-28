const DATABASE_URL = "http://localhost:9000/api";

export const getProducts = async () => {
  const response = await fetch(`${DATABASE_URL}/products`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data;
};

export const getSingleProduct = async (productId) => {
  const response = await fetch(`${DATABASE_URL}/products/${productId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch product.");
  }

  return data;
};

export const editProduct = async (productId, newPrice, currentPrice, productImg) => {
  const response = await fetch(`${DATABASE_URL}/products/${productId}`, {
    method: "PUT",
    body: JSON.stringify({ newPrice, currentPrice, productImg }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not edit product.");
  }

  return data;
};

export const postSubscription = async (email, productId) => {
  const response = await fetch(`${DATABASE_URL}/subscriptions`, {
    method: "POST",
    body: JSON.stringify({ email, product_id: productId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create subscription.");
  }

  return data;
};

export const getSubscriptions = async () => {
  const response = await fetch(`${DATABASE_URL}/subscriptions`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch subscriptions.");
  }

  console.log("data", data);

  return data;
};
