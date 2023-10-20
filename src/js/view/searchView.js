class Search {
  _parentElement = document.querySelector(".search");
  _btn = document.querySelector(".search--button");

  getQuery() {
    const query = this._parentElement.querySelector(".search-field").value;
    this._parentElement.querySelector(".search-field").value = "";
    return query;
  }

  addHandlerSearch(handler) {
    this._btn.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new Search();
