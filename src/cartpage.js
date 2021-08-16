let cart = JSON.parse(localStorage.getItem('cart'))
console.log(cart)
let cartContainer = document.querySelector('.cart-main-container')
let equipmentListContainer = document.querySelector('.equipment-list-container')

renderList(cart)

// Cost Area
let paymentContainer = document.createElement('div')
paymentContainer.classList.add('cart-cost-container')

//  Description Section
let descriptionContainer = createElement('div')

descriptionContainer.classList.add('cost-description-container')
let cartTotal = createElement('p')
cartTotal.textContent = 'Cart Total'
let tax = createElement('p')
tax.textContent = '10% Tax'
let shipping = createElement('p')
shipping.textContent = 'Shipping'
let total = createElement('p')
total.textContent = 'total'

descriptionContainer.appendChild(cartTotal)
descriptionContainer.appendChild(tax)
descriptionContainer.appendChild(shipping)
descriptionContainer.appendChild(total)

//  Cost Section
let costContainer = createElement('div')
costContainer.classList.add('cost-container')
let cartTotalDollar = createElement('p')
let taxDollar = createElement('p')
let shippingDollar = createElement('p')
shippingDollar.textContent = '$15'
let totalDollar = createElement('p')

costContainer.appendChild(cartTotalDollar)
costContainer.appendChild(taxDollar)
costContainer.appendChild(shippingDollar)
costContainer.appendChild(totalDollar)

paymentContainer.appendChild(descriptionContainer)
paymentContainer.appendChild(costContainer)
cartContainer.appendChild(equipmentListContainer)
cartContainer.appendChild(paymentContainer)

function renderList(list) {
  list.forEach((item) => {
    // Create Equipment Element Container
    let equipmentContainer = document.createElement('div')
    equipmentContainer.classList.add('single-equipment-container')
    equipmentContainer.id = item.id
    // Create Equipment Image Container
    let equipmentImageContainer = document.createElement('div')
    equipmentImageContainer.classList.add('equipment-image-container')

    //Create Image
    let equipmentImage = document.createElement('img')
    equipmentImage.classList.add('equipment-image')
    equipmentImage.src = item.img
    equipmentImage.alt = item.name
    equipmentImageContainer.appendChild(equipmentImage)

    // Create Equipment Information Section
    let equipmentInformation = document.createElement('div')
    equipmentInformation.classList.add('single-equipment-information')
    equipmentInformation.innerHTML = `<h2>${item.name}</h2> <h3>$${item.price}</h3>`
    let deleteButton = createElement('button')
    deleteButton.textContent = 'Remove'
    deleteButton.name = item.id

    // Remove Item
    deleteButton.addEventListener('click', (e) => {
      if (deleteButton.name === equipmentContainer.id) {
        let position = list.findIndex((item) => {
          return item.id === equipmentContainer.id
        })
        list.splice(position, 1)
        equipmentContainer.remove()
        localStorage.setItem('cart', JSON.stringify(list))
        window.location.reload(true)
      }
      if (cart.length == 0) {
        window.location.href = '/index.html'
      }
    })

    equipmentInformation.appendChild(deleteButton)
    equipmentContainer.appendChild(equipmentImageContainer)
    equipmentContainer.appendChild(equipmentInformation)
    equipmentListContainer.appendChild(equipmentContainer)
  })
}

function createElement(element) {
  return document.createElement(element)
}

// Find Cart Totals
let cartItemPricesArray = cart.map((item) => {
  return item.price
})
let cartTotalCost = (arr) => {
  return arr.reduce((sum, current) => {
    return sum + current
  })
}
let cartTotalAmount = cartTotalCost(cartItemPricesArray)
console.log(cartTotalAmount)
cartTotalDollar.textContent = '$' + cartTotalAmount

// Find Tax
let taxAmount = (value) => {
  let amount = value * 0.1
  return amount.toFixed(2)
}
let taxAmountDollar = taxAmount(cartTotalCost(cartItemPricesArray))

taxDollar.textContent = '$' + taxAmountDollar
console.log(cartTotalAmount + Number(taxAmountDollar))
// Find Total
totalDollar.textContent = '$' + (cartTotalAmount + Number(taxAmountDollar) + 15)
