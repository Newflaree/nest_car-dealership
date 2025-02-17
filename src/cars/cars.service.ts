// Nest
import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
// Uuid
import { v4 as uuid } from 'uuid';
// Interface
import { Car } from './interfaces/car.interface';


@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic'
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee'
    },
  ]

  findAll(): any[] {
    return this.cars;
  }

  findOneById( id: string ): any {
    const car = this.cars.find( ( car: Car ) => car.id === id );
    if ( !car ) throw new NotFoundException( `Car with id '${ id }' not found` );

    return car;
  }
}
