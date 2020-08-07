class Vehicle {
  constructor(public color: string) {}

  public honk(): void {
    console.log('Driving a Vehicle');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Driving a Car');
  }

  public startDrivingCar(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('Red');
vehicle.honk();

const car = new Car(4, 'Blue');
car.startDrivingCar();