let cart = JSON.parse(localStorage.getItem('cart'))
console.log(cart.length === 0)
let cartContainer = document.querySelector('.cart-main-container')

if (cart != null || cartContainer.length > 1) {
  let equipmentListContainer = createElement('div')
  equipmentListContainer.classList.add('equipment-list-container')
  cart.forEach((item) => {
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
        let position = cart.findIndex((item) => {
          return item.id === equipmentContainer.id
        })
        cart.splice(position, 1)
        equipmentContainer.remove()
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    })

    equipmentInformation.appendChild(deleteButton)
    equipmentContainer.appendChild(equipmentImageContainer)
    equipmentContainer.appendChild(equipmentInformation)
    equipmentListContainer.appendChild(equipmentContainer)
  })
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
  cartTotalDollar.textContent = '$200'
  let taxDollar = createElement('p')
  taxDollar.textContent = '$20'
  let shippingDollar = createElement('p')
  shippingDollar.textContent = '$15'
  let totalDollar = createElement('p')
  totalDollar.textContent = '$235'

  costContainer.appendChild(cartTotalDollar)
  costContainer.appendChild(taxDollar)
  costContainer.appendChild(shippingDollar)
  costContainer.appendChild(totalDollar)

  paymentContainer.appendChild(descriptionContainer)
  paymentContainer.appendChild(costContainer)
  cartContainer.appendChild(equipmentListContainer)
  cartContainer.appendChild(paymentContainer)
  function createElement(element) {
    return document.createElement(element)
  }
  console.log(equipmentListContainer)
} else {
  cartContainer.appendChild(equipmentListContainer)
}
