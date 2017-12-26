let store = { drivers: [], passengers: [], trips: [] }
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }//end of constructor
}//end of driver objecct

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }//end of constructor
}//end of passenger objecct

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driver = driver
    this.passenger = passenger
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driverId() {
    return function() {return 10}
    // return store.drivers.find(function(driver){
    //   return driver.id === this.driverId
    // })
    //return driverId === this.driver.id
  }
} // end of Trip Object
