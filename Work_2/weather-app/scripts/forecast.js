const key = "ZTX7AfRd6DVvS4ZcZkmllzBjGyxLxCl5";

const getCity = async (city) => {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};

const getWeather = async (locationKey) => {
  const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${locationKey}?apikey=${key}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};
