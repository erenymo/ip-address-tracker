class Details {
  _parentElement = document.querySelector(".details--container");
  _data;

  render(data) {
    this._data = data;

    const markup = this._generateMarkup();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup() {
    return `
        <div
            class="detail--ip-address border-r border-dark-gray flex flex-col"
          >
            <h4 class="text-dark-gray tracking-wider text-sm font-bold mb-2">
              IP ADRESS
            </h4>

            <span class="text-very-dark-gray text-3xl font-bold whitespace-normal"
              >${this._data.ip}</span
            >
          </div>
          <div
            class="detail--location border-r border-dark-gray flex flex-col"
          >
            <h4 class="text-dark-gray tracking-wider text-sm font-bold mb-2">
              LOCATION
            </h4>

            <span class="text-very-dark-gray text-3xl font-bold line-clamp-3"
              >${this._data.location.city}, ${this._data.location.region}</span
            >
          </div>
          <div
            class="detail--timezone border-r border-dark-gray flex flex-col"
          >
            <h4 class="text-dark-gray tracking-wider text-sm font-bold mb-2">
              TIMEZONE
            </h4>

            <span class="text-very-dark-gray text-3xl font-bold"
              >${this._data.location.timezone}</span
            >
          </div>
          <div class="detail--ISP flex flex-col ">
            <h4 class="text-dark-gray tracking-wider text-sm font-bold mb-2 ">
              ISP
            </h4>

            <span class="text-very-dark-gray text-3xl font-bold line-clamp-3"
              >${this._data.isp}</span
            >
          </div>
        `;
  }
}

export default new Details();
