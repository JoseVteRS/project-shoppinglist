import { API_URL } from "../../../constants/api";

export const productCreateApi = async (newProductData, onSuccess) => {
  try {
    const res = await fetch(`${API_URL}/product/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductData),
    });

    if (res.ok) {
      onSuccess();
    }
  } catch (error) {}
};
