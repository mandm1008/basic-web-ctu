const sanpham = {
  sp001: {
    name: "Sữa Chua Vị Kiwi",
    price: 21000,
    photo: "./images/sanpham/kiwi.jpg"
  },
  sp002: {
    name: "Sữa Chua Vị Xoài",
    price: 22000,
    photo: "./images/sanpham/mango.jpg"
  },
  sp003: {
    name: "Sữa Chua Vị Dưa lưới",
    price: 23000,
    photo: "./images/sanpham/cantaloupe.jpg"
  },
  sp004: {
    name: "Sữa Chua Vị Mâm Xôi",
    price: 24000,
    photo: "./images/sanpham/blackberry.jpg"
  },
  sp005: {
    name: "Sữa Chua Vị Dâu Tây",
    price: 25000,
    photo: "./images/Sanpham/strawberry.jpg"
  },
  sp006: {
    name: "Sữa Chua Vị Việt Quất",
    price: 26000,
    photo: "./images/sanpham/blueberry.jpg"
  },
  sp007: {
    name: "Sữa Chua Vị Bưởi",
    price: 27000,
    photo: "./images/sanpham/grapes.jpg"
  },
  sp008: {
    name: "Sữa Chua Vị Táo Xanh",
    price: 28000,
    photo: "./images/sanpham/green-apple.jpg"
  },
  sp009: {
    name: "Sira Chua Vi Dua",
    price: 29000,
    photo: "./images/sanpham/pineapple.jpg"
  }
}

showCart()

function htmlSP(data) {
  return Object.keys(data).map(key => {
    const sp = sanpham[key]

    return `
    <tr>
      <td>
        <img src="${sp.photo}" />
      </td>
      <td>
        ${sp.name}
      </td>
      <td>
        ${data[key]}
      </td>
      <td>
        ${sp.price}đ
      </td>
      <td>
        ${sp.price * Number.parseInt(data[key])}đ
      </td>
      <td>
        <i class="fa-solid fa-trash-can" onclick="removeCart('${key}')"></i>
      </td>
    </tr>
  `
  }).join("")
}

function htmlCalc(data) {
  const A = Object.keys(data).reduce((prev, curr) => prev + sanpham[curr].price * Number.parseInt(data[curr]), 0)
  const B = A * 10 / 100
  const C = (A - B) * 10 / 100

  return `
  <tr>
    <td colspan="6" class="full-width" id="tong">
      Tổng thành tiến (A) = ${A}đ
    </td>
  </tr>
  <tr>
    <td colspan="6" class="full-width" id="chiet-khau">
      Chiết khấu (B) = 0.1 x A = ${B}đ
    </td>
  </tr>
  <tr>
    <td colspan="6" class="full-width" id="thue">
      Thuế (C) = 10% x (A - B) = ${C}đ
    </td>
  </tr>
  <tr>
    <td colspan="6" class="full-width" id="tong-tien">
      Tổng đơn hàng = A - B + C = ${A - B + C}đ
    </td>
  </tr>
  `
}

function removeCart(key) {
  localStorage.removeItem(key)
  showCart()
}

function showCart() {
  const data = { ...localStorage }
  const tbody = document.querySelector("tbody")

  tbody.innerHTML = htmlSP(data) + htmlCalc(data)
}