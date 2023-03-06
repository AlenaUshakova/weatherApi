import axios from 'axios';

export const weatherByCurr = async (query,day) => {
  axios.defaults.baseURL = `https://api.weatherapi.com/v1/`;
  const KEY2 = 'e8751ca91012454b968145713232702';
  
  const response = await axios.get(
    `forecast.json?key=${KEY2}&q=${query}&days=${day}`
  );
  return response.data;
};
