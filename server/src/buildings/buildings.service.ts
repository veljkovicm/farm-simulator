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

  async createFarmBuilding(
    farmId: string,
    name: string,
    farmUnit: string // add DTOs?
  ) {
    const building = this.buildingRepository.create({
      farmId,
      name,
      farmUnit,
    });

    return this.buildingRepository.save(building);
  }

  async getBuildings(farmId) {
    const farms = await this.buildingRepository.find({
      where: { farmId },
      order: {
        createdAt: 'DESC'
      },
      relations: ['units']
    });

    return farms;
  }

  async getBuildingFarmUnits(productId: string) {
    const building = await this.buildingRepository.findOne(productId, {
      relations: ['units'],
      order: {
        createdAt: 'DESC'
      },
    });

    if (!building) {
      throw new NotFoundException(`Farm ${productId} not found`);
    }
    return building;
  }
}
