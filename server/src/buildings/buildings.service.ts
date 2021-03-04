import { Injectable, NotFoundException } from '@nestjs/common';
import { Building } from './entities/building.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BuildingService {
  private products: Building[] = [];

  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>
  ) {}

  async addFarm(name: string) {
    const farm = await this.buildingRepository.create({ name });

    return this.buildingRepository.save(farm);
  }

  async createFarmBuilding(
    farmId: string,
    name: string,
    farmUnit: string // add DTOs?
  ) {
    // check if farm exists first

    const building = this.buildingRepository.create({
      farmId,
      name,
      farmUnit,
    });

    return this.buildingRepository.save(building);
  }

  async getProducts() {
    const farms = await this.buildingRepository.find();

    console.log(farms);
    return farms;
  }

  async getBuildingFarmUnits(productId: string) {
    const building = await this.buildingRepository.findOne(productId, {
      relations: ['units'],
    });

    if (!building) {
      throw new NotFoundException(`Farm ${productId} not found`);
    }
    return building;
  }
}