import axios from 'axios';

// export const weatherByQuery = async query => {
//   axios.defaults.baseURL = `https://api.openweathermap.org/data/2.5/`;
//   const KEY = '155bb1208f9e01f3d36c72fa06cba243';
//   const response = await axios.get(
//     `weather?q=${query}&appid=${KEY}&units=metric`
//   );

//   return response.data;
// };

// export const weatherBy = async query => {
//   axios.defaults.baseURL = `http://api.weatherapi.com/v1/`;
//   const KEY2 = 'e8751ca91012454b968145713232702';
//   const response = await axios.get(`current.json?key=${KEY2}&q=${query}`);

//   return response.data;
// };

export const weatherByCurr = async (query,day) => {
  axios.defaults.baseURL = `http://api.weatherapi.com/v1/`;
  const KEY2 = 'e8751ca91012454b968145713232702';
  const response = await axios.get(
    `forecast.json?key=${KEY2}&q=${query}&days=${day}`
  );

  return response.data;
};
