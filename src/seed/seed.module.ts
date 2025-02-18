import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { BrandsModule } from '../brands/brands.module';
import { CarsModule } from '../cars/cars.module';
import { SeedController } from './seed.controller';


@Module({
  controllers: [ SeedController ],
  providers: [ SeedService ],
  imports: [
    BrandsModule,
    CarsModule
  ]
})
export class SeedModule {}
