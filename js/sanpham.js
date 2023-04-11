const data = {
  sp001: {
    name: "Sữa Chua Vị Kiwi",
    price: 21000,
    photo: "images/sanpham/kiwi.jpg"
  },
  sp002: {
    name: "Sữa Chua Vị Xoài",
    price: 22000,
    photo: "images/sanpham/mango.jpg"
  },
  sp003: {
    name: "Sữa Chua Vị Dưa lưới",
    price: 23000,
    photo: "images/sanpham/cantaloupe.jpg"
  },
  sp004: {
    name: "Sữa Chua Vị Mâm Xôi",
    price: 24000,
    photo: "images/sanphan/blackberry.jpg"
  },
  sp005: {
    name: "Sữa Chua Vị Dâu Tây",
    price: 25000,
    photo: "images/Sanpham/strawberry.jpg"
  },
  sp006: {
    name: "Sữa Chua Vị Việt Quất",
    price: 26000,
    photo: "images/sanpham/blueberry.jpg"
  },
  sp007: {
    name: "Sữa Chua Vị Bưởi",
    price: 27000,
    photo: "images/sanpham/grapes.jpg"
  },
  sp008: {
    name: "Sữa Chua Vị Táo Xanh",
    price: 28000,
    photo: "images/sanpham/green-apple.jpg"
  },
  sp009: {
    name: "Sira Chua Vi Dua",
    price: 29000,
    photo: "images/sanphan/pineapple.jpg"
  }
}

function addCart(id) {
  const input = Number.parseInt(document.querySelector("input#" + id).value)

  if (input > 0) {
    if (typeof localStorage !== 'undefined') {
      if (localStorage.getItem(id) !== null) {
        const number = Number.parseInt(localStorage.getItem(id))
        localStorage.setItem(id, number + input > 100 ? 100 : number + input)
      } else {
        localStorage.setItem(id, input)
      }
    } else {
      console.error("localStorage not supported!")
    }
  }
}
