class Search {
  _parentElement = document.querySelector(".search");
  _searchBar = document.querySelector(".search-field");
  _btn = document.querySelector(".search--button");
  _errorMessage = document.querySelector(".error-message");

  getQuery() {
    const query = this._parentElement.querySelector(".search-field").value;
    this._parentElement.querySelector(".search-field").value = "";
    return query;
  }

  renderError() {
    this._searchBar.classList.add("border-2", "border-red-500");
    this._errorMessage.classList.remove("hidden");
  }

  clearRenderError() {
    this._searchBar.classList.remove("border-2", "border-red-500");
    this._errorMessage.classList.add("hidden");
  }

  addHandlerSearch(handler) {
    this._btn.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new Search();
