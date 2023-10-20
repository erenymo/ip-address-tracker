import map from "./view/map.js";
import * as model from "./model.js";
import details from "./view/details.js";
import search from "./view/search.js";

const updateMap = async function (ip) {
  await model.loadMap(ip);
  console.log(model.state.map);

  // create details
  details.render(model.state.map);

  // Create the Map
  map.createMap(model.state.map.location.lat, model.state.map.location.lng);
};

const loadMap = async function () {
  try {
    // IP Address
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();

    // Update Map
    updateMap(data.ip);
  } catch (err) {
    console.error(err);
  }
};

const searchMap = async function () {
  try {
    // 1) take ip address
    const ipAddress = search.getQuery();

    await model.loadMap(ipAddress);
    console.log(model.state.map);

    // create details
    details.render(model.state.map);

    // 3) move map
    map.moveMap(model.state.map.location.lat, model.state.map.location.lng);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  search.addHandlerSearch(searchMap);
};
loadMap();
init();
