const formElement = document.querySelector("form")
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

formElement.onsubmit = (e) => {
  return this.checkValidity()
}