class Map {
  _parentElement = document.querySelector("#map");
  #map;

  createMap(lat, lng) {
    this.#map = L.map("map", {
      dragging: false,
      doubleClickZoom: false,
      scrollWheelZoom: false,
      zoomControl: false,
    }).setView([lat, lng], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  moveMap(lat, lng) {
    this.#map.setView([lat, lng], 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }
}

export default new Map();
