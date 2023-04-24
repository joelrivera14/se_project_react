const weatherOptions = [
  { url: require("../Images/day/sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../Images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../Images/day/foggy.svg").default, day: true, type: "foggy" },
  {
    url: require("../Images/day/rainy.svg").default,
    day: true,
    type: "rainy",
  },
  { url: require("../Images/day/snowy.svg").default, day: true, type: "snowy" },
  {
    url: require("../Images/day/stormy.svg").default,
    day: true,
    type: "stormy",
  },
  {
    url: require("../Images/night/moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("../Images/night/nightcloudy.svg").default,
    day: false,
    type: "nightcloudy",
  },
  {
    url: require("../Images/night/nightfoggy.svg").default,
    day: false,
    type: "nightfoggy",
  },
  {
    url: require("../Images/night/nightrainy.svg").default,
    day: false,
    type: "nightrainy",
  },
  {
    url: require("../Images/night/nightsnowy.svg").default,
    day: false,
    type: "nightsnowy",
  },
  {
    url: require("../Images/night/nightstormy.svg").default,
    day: false,
    type: "nightstormy",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("WeatherCard");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <>
      <section className="weather" id="weather">
        <div className="weather__temp">{weatherTemp}</div>
        <div>
          <img src={imageSrcUrl} className="weather__image" />
        </div>
      </section>
      <section id="weather__cards"></section>
    </>
  );
};

export default WeatherCard;
