const axios = require('axios').default;

const getProducts = async () => {
  try {
    let result = await axios.get(
      'https://raw.githubusercontent.com/amarofashion/front-end-challenge/master/products.json'
    );
    return result.data;
  } catch (e) {
    console.error(e);
  }
};

export { getProducts };
