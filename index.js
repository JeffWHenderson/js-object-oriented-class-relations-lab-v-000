let store = { drivers: [], passengers: [], trips: [] }

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {          // many trips, many passengers thru trips
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId == this.id
    })
  }

  passengers(){
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }
} // end of Driver object

class Passenger { // many trips/ many drivers thru trips
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId == this.id
    })
  }

  drivers(){
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
} // end of Passenger Object

class Trip { // belongs to driver; belongs to passenger
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id == this.driverId
    })
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id == this.passengerId
    })
  }
} // end of trips object
