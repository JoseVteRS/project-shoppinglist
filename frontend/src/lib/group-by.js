export const groupProductsByCategories = (items, key) => {
  let products = items.reduce(
    (result, item) => ({
      ...result,
      [item[key]["name"]]: [...(result[item[key]["name"]] || []), item],
    }),
    {}
  );

  return Object.keys(products).map((key) => [
    { nameCategory: key },
    { products: products[key] },
  ]);
};
