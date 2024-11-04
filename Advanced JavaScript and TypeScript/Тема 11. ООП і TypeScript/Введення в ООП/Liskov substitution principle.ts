abstract class Vehicle {
    abstract startEngine(): void;
    abstract accelerate(): void;
}

class Car extends Vehicle {
    startEngine() {
        this.engageIgnition();
        console.log("Car engine started");
    }

    accelerate() {
        console.log("Car is accelerating");
    }

    private engageIgnition() {
        // Ignition procedure
        console.log("Engaging car ignition");
    }
}

class ElectricBus extends Vehicle {
    startEngine() {
        console.log("Electric bus engine started");
    }

    accelerate() {
        this.increaseVoltage();
        this.connectIndividualEngines();
        console.log("Electric bus is accelerating");
    }

    private increaseVoltage() {
        // Electric logic
        console.log("Increasing electric bus voltage");
    }

    private connectIndividualEngines() {
        // Connection logic
        console.log("Connecting individual electric bus engines");
    }
}

class Driver {
    go(vehicle: Vehicle) {
        vehicle.startEngine();
        vehicle.accelerate();
    }
}

let car = new Car();
let bus = new ElectricBus();
let driver = new Driver();

driver.go(car);  // This should work
driver.go(bus);  // This should also work