class car {
    constructor(make, model, year, mileage, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.color = color;
    }

    driveToWork() {
        console.log('Old mileage: ' + this.mileage + ' New mileage:' + Number(30000 + 33));
    }
    driveAroundTheWorld() {
        console.log('Old Mileage: 30,033 New Milage: ' + Number(30000 + 33 + 2000)
        )
    }
    runErrands() {
        console.log('Old Mileage: 30,033 New Milage: ' + Number(30000 + 33 + 2000 + 30))
    }
}



const jeep = new car("Jeep", "Wrangler", 2017, 30000, "white");

console.log(jeep)
jeep.driveToWork()
jeep.driveAroundTheWorld()
jeep.runErrands()

