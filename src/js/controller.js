import map from "./view/mapView.js";
import * as model from "./model.js";
import details from "./view/detailsView.js";
import search from "./view/searchView.js";

const updateMap = async function (ip) {
  await model.loadMap(ip);

  // create details
  details.render(model.state.map);

  // Create the Map
  map.createMap(model.state.map.location.lat, model.state.map.location.lng);
};

const loadMap = async function () {
  try {
    // IP Address on the initial page load
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
    search.clearRenderError();
    // 1) take ip address
    const ipAddress = search.getQuery();

    await model.loadMap(ipAddress);

    // create details
    details.render(model.state.map);

    // 3) move map
    map.moveMap(model.state.map.location.lat, model.state.map.location.lng);
  } catch (err) {
    search.renderError();
  }
};

const init = function () {
  search.addHandlerSearch(searchMap);
};
loadMap();
init();
