export const groupProductsByCategories = (items, key) => {
  let products = items.reduce(
    (result, item) => ({
      ...result,
      [item[key]["name"]]: [...(result[item[key]["name"]] || []), item],
    }),
    {}
  );

  return Object.keys(products).map( (key) => [
    { nameCategory: key },
    { products: products[key] },
  ]);
};

export const groupProductsByCategoriesFromList = (items, key) => {
  // console.log(items);
  let products = items.reduce(
    (result, item) => ({
      ...result,
      [item[key]["category"]["name"]]: [
        ...(result[item[key]["category"]["name"]] || []),
        item,
      ],
    }),
    {}
  );

  return Object.keys(products).map((key) => [
    { nameCategory: key },
    { products: products[key] },
  ]);
};
