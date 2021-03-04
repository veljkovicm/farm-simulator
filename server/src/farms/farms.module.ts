import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmsController } from './farms.controller';
import { FarmsService } from './farms.service';
import { Farm } from './entities/farm.entity';
import { Building } from 'src/buildings/entities/building.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ Farm, Building ])],
  controllers: [FarmsController],
  providers: [FarmsService],
})
export class FarmsModule {}
