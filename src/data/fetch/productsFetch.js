export const fetchProducts = () => {
  const promise = fetch(
    "http://jsdeveloper-shop-api.s3-website-eu-west-1.amazonaws.com/"
  );

  return promise;
};
