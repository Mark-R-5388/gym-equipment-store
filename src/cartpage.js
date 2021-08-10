let cart = JSON.parse(localStorage.getItem('cart'))
console.log(cart)
let cartContainer = document.querySelector('.cart-main-container')

if (cart != null) {
  cart.forEach((item) => {
    // Create Equipment Element Container
    let equipmentContainer = document.createElement('div')
    equipmentContainer.classList.add('single-equipment-container')

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

    equipmentContainer.appendChild(equipmentImageContainer)
    equipmentContainer.appendChild(equipmentInformation)
    cartContainer.appendChild(equipmentContainer)
  })
} else {
  cartContainer.textContent = 'Cart Is Empty'
}
