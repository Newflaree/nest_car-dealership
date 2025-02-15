import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';


interface Car {
  id: number;
  brand: string;
  model: string;
}

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic'
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee'
    },
  ]

  findAll(): any[] {
    return this.cars;
  }

  findOneById( id: number ): any {
    const car = this.cars.find( ( car: Car ) => car.id === id );
    if ( !car ) throw new NotFoundException( `Car with id '${ id }' not found` );

    return car;
  }
}
