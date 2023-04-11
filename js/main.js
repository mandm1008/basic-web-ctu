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

$(document).ready(() => {
  const d = new Date()
  const ads = `Khách hàng có ngày sinh trong tháng ${d.getMonth()} sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng.`

  $('footer').append(`<div id='adscontainer'><span id='adstext'><h2>${ads}</h2></span></div>`)

  const W = ($(window).width() - $('main').outerWidth()) / 2

  if (W >= 200) {
    adsVerEffect(W)
  } else {
    adsHorEffect(W)
  }
})

function adsVerEffect(W) {
  $('div#adscontainer')
    .addClass('adsvercontainer')
    .addClass('container')
    .css({ width: W + 'px' })

  $('span#adstext')
    .addClass('adsvertext')
    .addClass('adstext')
    .css({ top: $('div#adscontainer').outerHeight() + 'px' })
    .animate({ left: '-=' + ($('div#adscontainer').outerWidth() + $('span#adstext').outerWidth()) + 'px' }, 30000, adsVerEffect)
}

function adsHorEffect() {
  $('div#adscontainer')
    .addClass('adshorcontainer')
    .addClass('container')
    .css({ width: $('main').width() + 'px', left: $('main').position().left })

  $('span#adstext')
    .addClass('adshortext')
    .addClass('adstext')
    .css({ left: $('div#adscontainer').width() + 'px' })
    .animate({ left: '-=' + ($('div#adscontainer').outerWidth() + $('span#adstext').outerWidth()) + 'px' }, 30000, adsHorEffect)
}