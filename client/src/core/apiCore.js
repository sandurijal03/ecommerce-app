export const getProducts = (sortBy) => {
  return fetch(
    `http://localhost:4000/api/products?sortBy=${sortBy}&order=desc&limit=6`,
    {
      method: 'GET',
    },
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};