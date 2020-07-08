export const fetchProducts = () => {
  const promise = fetch(
    'https://d24huwa7xw9s1p.cloudfront.net/?fbclid=IwAR3be8g2pG_aaRu8Cg1QyhVJACiZJiTytst48DdKwX_0tuQGGbTnbPrOFqE',
  );

  return promise;
};
