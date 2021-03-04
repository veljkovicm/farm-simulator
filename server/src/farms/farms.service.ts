import { Injectable, NotFoundException } from '@nestjs/common';
import { Farm } from './entities/farm.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FarmsService {
  constructor(
    @InjectRepository(Farm)
    private readonly farmsRepository: Repository<Farm>
  ) {}

  async addFarm(name: string) {
    const farm = await this.farmsRepository.create({ name });
    return this.farmsRepository.save(farm);
  }

  async getFarms() {
    return this.farmsRepository.find();
  }

  async getFarmBuildings(farmId: string) {
    const farm = await this.farmsRepository.findOne(farmId, {
      relations: ['buildings'],
    });

    if (!farm) {
      throw new NotFoundException(`Farm ${farmId} not found`);
    }
    return farm;
  }
}
