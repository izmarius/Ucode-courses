const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");

const getTimeImageSrc = (weather) => {
  if (weather.IsDayTime) {
    return 'img/day.svg';
  }
  return 'img/night.svg';
};

const getIconSrc = (weather) => {
  return `img/icons/${weather.WeatherIcon}.svg`;
};

const updateUI = (data) => {
  const cityDetails = data.cityDetails;
  const cityWeather = data.weather;
  console.log(cityWeather);

  //update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${cityWeather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${cityWeather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    //remove d-none class from card
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    //update night / day and icon images
    time.setAttribute('src', getTimeImageSrc(cityWeather));
    icon.setAttribute('src', getIconSrc(cityWeather));
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weather: weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
