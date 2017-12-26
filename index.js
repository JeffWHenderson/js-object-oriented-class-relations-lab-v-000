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
      return store.trips.filter(function(trip){
        return trip.driverId === this.id
      })
  }

  // trips(){
  //   return store.trips.filter(trip => {
  //     return trip.driverId == this.id;
  //   });
  // }
  passengers(){
    return this.trips().map(trip => {
      console.log(trip.passenger())
    })
  }

}//end of driver objecct

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }//end of constructor

  trips() {
      return store.trips.filter(function(passenger){
        return passenger === passenger
      })
  }

  drivers(){
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
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
