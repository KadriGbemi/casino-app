import axios from 'axios';

function getCryptoPriceList(requests) {
  return axios
    .get(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${requests}&tsyms=EUR`
    )
    .then(response => {
      localStorage.setItem("priceList", JSON.stringify(response.data))
      return response.data;
    });
}

export default getCryptoPriceList;
