export const getForecastWeather = () => {
  const latitude = 44.34;
  const longitude = 10.99;
  const APIkey = "d4068566f6b20e7786c16bddf5f1ad55";
  const weatherApi = fetch(
    ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return temperature;
};
