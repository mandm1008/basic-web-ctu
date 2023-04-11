const formSearchElement = document.querySelector("#search-form")
const inputSearchElement = document.querySelector("#search-form #search")
const searchBtnElement = document.querySelector("#search-icon")

inputSearchElement.addEventListener("keypress", (e) => {
  if (e.code === "Enter" && !!inputSearchElement.value && inputSearchElement.value.length > 0) {
    formSearchElement.submit()
  }
})
searchBtnElement.addEventListener("click", () => {
  if (!!inputSearchElement.value && inputSearchElement.value.length > 0) {
    formSearchElement.submit()
  }
})
