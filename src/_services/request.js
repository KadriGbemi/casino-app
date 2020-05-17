import axios from "axios";

const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=";

function getCryptoPriceList(requests) {
  return axios.get(`${url}${requests}&tsyms=EUR`).then((response) => response.data);
}

export default getCryptoPriceList;
