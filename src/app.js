class Equipment {
  constructor(img, name, price) {
    this.img = img
    this.name = name
    this.price = price
  }
}

// Equipment
let barbell = new Equipment(
  '../src/equipment-pics/barbell.jpeg',
  'barbell',
  '$120'
)
let stationaryBike = new Equipment(
  '../src/equipment-pics/bike.jpeg',
  'stationaryBike',
  '$200'
)
let dumbbell = new Equipment(
  '../src/equipment-pics/dumbbells.jpeg',
  'dumbbell',
  '$25'
)
let rings = new Equipment(
  '../src/equipment-pics/gymnastics-rings.jpeg',
  'Gymnastics Rings',
  '$60'
)
let kettleBells = new Equipment(
  '../src/equipment-pics/kettlebells.jpeg',
  'kettle bell',
  '$60'
)
let medicineBalls = new Equipment(
  '../src/equipment-pics/medicine-balls.jpeg',
  'medicince balls',
  '$30'
)
let resistanceBand = new Equipment(
  '../src/equipment-pics/resistance-band.jpeg',
  'Resistance Band',
  '$10'
)
let rower = new Equipment(
  '../src/equipment-pics/rower.jpeg',
  'Stationary Rower',
  '$300'
)
let squatRack = new Equipment(
  '../src/equipment-pics/squat-rack.jpeg',
  'Squat Rack',
  '$400'
)
let treadmill = new Equipment(
  '../src/equipment-pics/treadmill.jpeg',
  'Treadmill',
  '$350'
)
let weightBench = new Equipment(
  '../src/equipment-pics/weight-bench.jpeg',
  'Weight Bench',
  '$100'
)
let weightPlates = new Equipment(
  '../src/equipment-pics/weight-plate.jpeg',
  'Weight Plates',
  '$50'
)

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

equipmentList.forEach((equipment) => {
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
