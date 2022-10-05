class Vehicle {
    constructor(public color: string) {
    }
    public drive(): void {
        console.log('chugga chugga')
    }
    protected honk(): void {
        console.log('ghjj')
    }
}

const vehicle = new Vehicle('red')
vehicle.drive()

class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color)
    }
    public drive(): void {
        this.honk()
    }
}

const car2 = new Car(4,'red')
car2.drive()