import { API_KEY, API_URL } from "./config";

export const state = {
  map: {
    coords: [],
    ip: "",
    location: {},
    timezone: "",
    isp: "",
  },
};

const createMapObject = function (data) {
  const map = data;
  return (state.map = {
    ip: map.ip,
    isp: map.isp,
    location: {
      country: map.location.country,
      region: map.location.region,
      city: map.location.city,
      lat: map.location.lat,
      lng: map.location.lng,
      timezone: map.location.timezone,
    },
  });
};

export const loadMap = async function (ip) {
  try {
    // Data
    const response = await fetch(`${API_URL}${API_KEY}&ipAddress=${ip}`);

    if (!response.ok) {
      alert("the search is invalid");
      return;
    }

    const data = await response.json();

    // console.log(data);

    state.map = createMapObject(data);
    // console.log(state);
  } catch (err) {
    console.error(err);
  }
};
