import { Injectable, NotFoundException } from '@nestjs/common';
import { Unit } from './entities/unit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Building } from 'src/buildings/entities/building.entity';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Unit)
    private readonly unitsRepository: Repository<Unit>,
    @InjectRepository(Building)
    private readonly buildingsRepository: Repository<Building>
  ) {}

  async addUnit(buildingId) {
    const building = await this.buildingsRepository.findOne(buildingId);

    // if !building...

    const unit = await this.unitsRepository.create({
      buildingId: building.id,
      name: building.farmUnit,
    });

    return this.unitsRepository.save(unit);
  }

  async getUnits(buildingId: string) {
    return this.unitsRepository.find({ buildingId });
  }

  async getSingleProduct(productId: string) {
    const farm = await this.unitsRepository.findOne(productId);

    if (!farm) {
      throw new NotFoundException(`Farm ${productId} not found`);
    }
    return farm;
  }

  async feedUnit(id: string) {
    const unit = await this.unitsRepository.findOne(id);
    console.log(unit.health);

    unit.health++;
    unit.lastFedTime = new Date();
    return this.unitsRepository.save(unit);

    // if !unit return 'unit not found'

    // if unit.status === dead return 'cannot feed a dead unit'
    // if unit.health === 100 return this unit is already at max health

    // custom decorator?

    // use: throw new NotFoundException('error message' )
  }
}
