// Nest
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
// DTO
import {
  CreateCarDto,
  UpdateCarDto
} from './dto';
// Services
import { CarsService } from './cars.service';


@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById( @Param( 'id',  new ParseUUIDPipe({ version: '4' }) ) id: string ) {
    console.log({ id });
    return this.carsService.findOneById( id );
  }

  @Post()
  createCar( @Body() createCarDto: CreateCarDto ) {
    return this.carsService.create( createCarDto );
  }

  @Patch(':id')
  updateCar(
    @Param( 'id', ParseUUIDPipe ) id: string,
    @Body() updateCarDto: UpdateCarDto
  ) {
    return updateCarDto;
  }

  @Delete(':id')
  deleteCar( @Param( 'id', ParseIntPipe ) id: number ) {
    return {
      method: 'delete',
      id
    }
  }
}
