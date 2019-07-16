import axios from "axios";

const key = "26adf0f9cf246c1a0bb84802af2825c9";
const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=imperial&q=`;

const getWeather = city => {
  return axios.get(`${url}${city}`).then(res => {
    const forecast = res.data;
    const forecastList = forecast.list;
    const getFiveDayForecast = forecastList.reduce((total, item) => {
      const day = item.dt_txt.split(" ")[0];
      if (total.hasOwnProperty(day)) {
        total[day].push(item.main.temp);
      } else {
        total[day] = [item.main.temp];
      }
      return total;
    }, {});
    return Object.entries(getFiveDayForecast).map(([date, temps]) => {
      const max = Math.round(Math.max(...temps));
      const min = Math.round(Math.min(...temps));
      const average = Math.round(
        temps.reduce((total, item) => total + item, 0) / temps.length
      );
      return { date, max, min, average, temps };
    });
  });
};

export default getWeather;
