export const weatherOptions = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/foggy.svg").default, day: true, type: "foggy" },
  {
    url: require("../images/day/rainy.svg").default,
    day: true,
    type: "rainy",
  },
  { url: require("../images/day/snowy.svg").default, day: true, type: "snowy" },
  {
    url: require("../images/day/stormy.svg").default,
    day: true,
    type: "stormy",
  },
  {
    url: require("../images/night/moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("../images/night/nightcloudy.svg").default,
    day: false,
    type: "nightcloudy",
  },
  {
    url: require("../images/night/nightfoggy.svg").default,
    day: false,
    type: "nightfoggy",
  },
  {
    url: require("../images/night/nightrainy.svg").default,
    day: false,
    type: "nightrainy",
  },
  {
    url: require("../images/night/nightsnowy.svg").default,
    day: false,
    type: "nightsnowy",
  },
  {
    url: require("../images/night/nightstormy.svg").default,
    day: false,
    type: "nightstormy",
  },
];

export const baseUrl =
  "https://my-json-server.typicode.com/joelrivera14/se_project_react";

export const latitude = 44.34;
export const longitude = 10.99;
export const APIkey = "d4068566f6b20e7786c16bddf5f1ad55";
export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error${res.status}`);
}
