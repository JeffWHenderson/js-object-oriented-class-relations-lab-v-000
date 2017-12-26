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

  trips() {
    console.log(this.id)
    //console.log(
      store.trips.filter(function(driver){
        driver === driver
      })
        // return store.trips.filter(function(this){
        //   return this
        // })
  //)
  }
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
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(function(driverId){
      return driverId
    })
  }

  passenger() {
    return store.passengers.find(function(passengerId){
      return passengerId
    })
  }
} // end of Trip Object
