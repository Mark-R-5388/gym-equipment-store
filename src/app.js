// Equipment
let barbell = {
  img: '../src/equipment-pics/barbell.jpeg',
  name: 'barbell',
  price: 120,
}

let stationaryBike = {
  img: '../src/equipment-pics/bike.jpeg',
  name: 'Stationary Bike',
  price: 200,
}

let dumbbell = {
  img: '../src/equipment-pics/dumbbells.jpeg',
  name: 'dumbbell',
  price: 25,
}

let rings = {
  img: '../src/equipment-pics/gymnastics-rings.jpeg',
  name: 'Gymnastics Rings',
  price: 60,
}

let kettleBells = {
  img: '../src/equipment-pics/kettlebells.jpeg',
  name: 'kettle bell',
  price: 60,
}

let medicineBalls = {
  img: '../src/equipment-pics/medicine-balls.jpeg',
  name: 'medicince balls',
  price: 30,
}

let resistanceBand = {
  img: '../src/equipment-pics/resistance-band.jpeg',
  name: 'Resistance Band',
  price: 10,
}

let rower = {
  img: '../src/equipment-pics/rower.jpeg',
  name: 'Stationary Rower',
  price: 300,
}

let squatRack = {
  img: '../src/equipment-pics/squat-rack.jpeg',
  name: 'Squat Rack',
  price: 400,
}

let treadmill = {
  img: '../src/equipment-pics/treadmill.jpeg',
  name: 'Treadmill',
  price: 350,
}

let weightBench = {
  img: '../src/equipment-pics/weight-bench.jpeg',
  name: 'Weight Bench',
  price: 100,
}

let weightPlates = {
  img: '../src/equipment-pics/weight-plate.jpeg',
  name: 'Weight Plates',
  price: 50,
}

// Equipment List
let equipmentList = [
  barbell,
  stationaryBike,
  dumbbell,
  rings,
  kettleBells,
  medicineBalls,
  resistanceBand,
  rower,
  squatRack,
  treadmill,
  weightBench,
  weightPlates,
]

// Cart
let cart = []
cart = loadCart()

// Cart Button
const cartButton = document.querySelector('#cart-button')
let cartButtonNumberCircle = document.createElement('div')
cartButtonNumberCircle.classList.add('cart-button-amount')
let cartButtonNumber = document.createElement('p')
cartButtonNumber.textContent = cart.length
cartButtonNumberCircle.appendChild(cartButtonNumber)
cartButton.appendChild(cartButtonNumberCircle)

cartButton.addEventListener('click', () => {
  if (cart.length > 0) {
    window.location.href = '/cartpage.html'
  }
})

const render = function (list) {
  list.forEach((equipment) => {
    // Create Equipment Element Container
    let equipmentContainer = makeElement('div', 'single-equipment-container')

    // Create Equipment Image Container
    let equipmentImageContainer = makeElement(
      'div',
      'equipment-image-container'
    )
    equipmentImageContainer.classList.add()

    //Create Image
    let equipmentImage = makeElement('img', 'equipment-image')
    equipmentImage.src = equipment.img
    equipmentImage.alt = equipment.name

    equipmentImageContainer.appendChild(equipmentImage)

    // Create Equipment Information Section
    let equipmentInformation = makeElement(
      'div',
      'single-equipment-information'
    )
    equipmentInformation.innerHTML = `<h2>${equipment.name}</h2> <h3>$${equipment.price}</h3>`

    // Add and Subtract Items Container
    let quantityBox = makeElement('div', 'order-amount-container')

    let subtractButton = makeElement('button', 'subtract-button')
    subtractButton.textContent = '-'

    let amountArea = makeElement('p', 'amount')
    amountArea.textContent = 0

    let addButton = makeElement('button', 'add-button')
    addButton.textContent = '+'

    quantityBox.appendChild(subtractButton)
    quantityBox.appendChild(amountArea)
    quantityBox.appendChild(addButton)

    // Add To Cart Button
    let addItemToCart = makeElement('button', 'add-item-button')
    addItemToCart.textContent = 'Add to Cart'

    // Combine all together
    equipmentInformation.appendChild(quantityBox)
    equipmentContainer.appendChild(equipmentImageContainer)
    equipmentContainer.appendChild(equipmentInformation)
    equipmentContainer.appendChild(addItemToCart)
    document
      .querySelector('.gym-equipment-container')
      .appendChild(equipmentContainer)
    // Amount Section
    addButton.addEventListener('click', () => {
      amountArea.textContent++
    })
    subtractButton.addEventListener('click', () => {
      if (amountArea.textContent == 0) {
        amountArea.textContent = 0
      } else {
        amountArea.textContent--
      }
    })

    // Add to Cart
    addItemToCart.addEventListener('click', () => {
      let amount = amountArea.textContent

      for (let i = 1; i <= amount; i++) {
        equipment.id = ''
        equipment.id = randomId()
        cartButtonNumber.textContent++
      }
      saveToCart(equipment)

      amountArea.textContent = 0
    })
  })
}

// Search Section
const searchContent = {
  text: '',
  dropDownValue: '',
}

// Text Search
const searchVariable = document.querySelector('#search-container')
searchVariable.addEventListener('input', (e) => {
  searchContent.text = e.target.value

  let filteredEquipment = equipmentList.filter((equipment) => {
    return equipment.name
      .toLowerCase()
      .includes(searchContent.text.toLowerCase())
  })

  console.log(filteredEquipment.length)

  document.querySelector('.gym-equipment-container').innerHTML = ''

  if (filteredEquipment.length == []) {
    let errorStatement = document.createElement('h2')
    errorStatement.textContent = 'Sorry, no search results'
    document
      .querySelector('.gym-equipment-container')
      .appendChild(errorStatement)
  } else {
    render(filteredEquipment)
  }
})

// Dropdown Menu
const dropDownVariable = document.querySelector('#drop-down')

dropDownVariable.addEventListener('change', (e) => {
  searchContent.dropDownValue = dropDownVariable.value

  let sortedList = equipmentList.sort((a, b) => {
    if (searchContent.dropDownValue === 'alphabetical') {
      let nameA = a.name.toLowerCase()
      let nameB = b.name.toLowerCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    }

    if (searchContent.dropDownValue === 'price-high') {
      return b.price - a.price
    }

    if (searchContent.dropDownValue === 'price-low') {
      return a.price - b.price
    }
  })

  document.querySelector('.gym-equipment-container').innerHTML = ''
  render(sortedList)
})

// Load Cart
function loadCart() {
  if (localStorage.length != 0) {
    let cartJSON = localStorage.getItem('cart')
    let loadedCart = JSON.parse(cartJSON)
    loadedCart.forEach((item) => {
      cart.push(item)
    })

    return cart
  } else {
    let value = JSON.stringify([])
    localStorage.setItem('cart', value)
    let cartJSON = localStorage.getItem('cart')
    cart = cartJSON
    return cart
  }
}

// On Loading First Time
window.addEventListener('DOMContentLoaded', () => {
  render(equipmentList)
  cart = loadCart()
})

// save to cart
function saveToCart(item) {
  cart.push(item)
  localStorage.setItem('cart', JSON.stringify(cart))
}

// random id
function randomId() {
  return Math.random().toString(16).substr(2, 16)
}

// Make Element
function makeElement(element, className) {
  let newElement = document.createElement(element)
  newElement.classList.add(className)
  return newElement
}
