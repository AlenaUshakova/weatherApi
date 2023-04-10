import axios from 'axios';

export const weatherByCurr = async (query,day) => {
  axios.defaults.baseURL = `https://api.weatherapi.com/v1/`;
  const KEY2 = 'a9cb760719994979b48105021231004';
  
  const response = await axios.get(
    `forecast.json?key=${KEY2}&q=${query}&days=${day}`
  );
  return response.data;
};
