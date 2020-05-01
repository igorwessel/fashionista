const axios = require('axios').default;

const getProducts = async () => {
  try {
    let result = await axios.get(
      'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'
    );
    return result.data;
  } catch (e) {
    console.error(e);
  }
};

const getProductByName = async (productName) => {
  try {
    let result = await axios.get(
      'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'
    );
    return result.data.filter(({ name }) => name === productName)[0];
  } catch (e) {
    console.error(e);
  }
};
export { getProducts, getProductByName };
