// Equipment
let barbell = {
  img: '../src/equipment-pics/barbell.jpeg',
  name: 'barbell',
  price: '$120',
}

let stationaryBike = {
  img: '../src/equipment-pics/bike.jpeg',
  name: 'Stationary Bike',
  price: '$200',
}

let dumbbell = {
  img: '../src/equipment-pics/dumbbells.jpeg',
  name: 'dumbbell',
  price: '$25',
}

let rings = {
  img: '../src/equipment-pics/gymnastics-rings.jpeg',
  name: 'Gymnastics Rings',
  price: '$60',
}

let kettleBells = {
  img: '../src/equipment-pics/kettlebells.jpeg',
  name: 'kettle bell',
  price: '$60',
}

let medicineBalls = {
  img: '../src/equipment-pics/medicine-balls.jpeg',
  name: 'medicince balls',
  price: '$30',
}

let resistanceBand = {
  img: '../src/equipment-pics/resistance-band.jpeg',
  name: 'Resistance Band',
  price: '$10',
}

let rower = {
  img: '../src/equipment-pics/rower.jpeg',
  name: 'Stationary Rower',
  price: '$300',
}

let squatRack = {
  img: '../src/equipment-pics/squat-rack.jpeg',
  name: 'Squat Rack',
  price: '$400',
}

let treadmill = {
  img: '../src/equipment-pics/treadmill.jpeg',
  name: 'Treadmill',
  price: '$350',
}

let weightBench = {
  img: '../src/equipment-pics/weight-bench.jpeg',
  name: 'Weight Bench',
  price: '$100',
}

let weightPlates = {
  img: '../src/equipment-pics/weight-plate.jpeg',
  name: 'Weight Plates',
  price: '$50',
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

const render = function (list) {
  list.forEach((equipment) => {
    // Create Equipment Element Container
    let equipmentContainer = document.createElement('div')
    equipmentContainer.classList.add('single-equipment-container')

    // Create Equipment Image Container
    let equipmentImageContainer = document.createElement('div')
    equipmentImageContainer.classList.add('equipment-image-container')

    //Create Image
    let equipmentImage = document.createElement('img')
    equipmentImage.classList.add('equipment-image')
    equipmentImage.src = equipment.img
    equipmentImage.alt = equipment.name

    equipmentImageContainer.appendChild(equipmentImage)

    // Create Equipment Information Section
    let equipmentInformation = document.createElement('div')
    equipmentInformation.classList.add('single-equipment-information')
    equipmentInformation.innerHTML = `<h2>${equipment.name}</h2> <h3>${equipment.price}</h3>`

    // Combine all together
    equipmentContainer.appendChild(equipmentImageContainer)
    equipmentContainer.appendChild(equipmentInformation)
    document
      .querySelector('.gym-equipment-container')
      .appendChild(equipmentContainer)
  })
}

// On Loading First Time
window.addEventListener('DOMContentLoaded', () => {
  render(equipmentList)
})

// Search Section
const searchContent = {
  text: '',
}
const searchVariable = document.querySelector('#search-container')
searchVariable.addEventListener('input', (e) => {
  searchContent.text = e.target.value

  let filteredEquipment = equipmentList.filter((equipment) => {
    return equipment.name
      .toLowerCase()
      .includes(searchContent.text.toLowerCase())
  })

  document.querySelector('.gym-equipment-container').innerHTML = ''
  render(filteredEquipment)
})
