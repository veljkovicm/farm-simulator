import { Injectable, NotFoundException } from '@nestjs/common';
import { Farm } from './entities/farm.entity';
import { Unit } from '../units/entities/unit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class FarmsService {
  constructor(
    @InjectRepository(Farm)
    private readonly farmsRepository: Repository<Farm>,
    @InjectRepository(Unit)
    private readonly unitsRepository: Repository<Unit>
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

  // @Cron('* * * * * *')
  async handleFarmFeeding() {
    const farms = await this.farmsRepository.find();

    const farmIds = farms
      .filter((farm) => {
        const secSinceLastFed = (new Date().getTime() - farm.lastFedTime.getTime()) / 1000;
        return secSinceLastFed > 60;
      })
      .map(({ id }) => id);

    return this.unitsRepository
      .createQueryBuilder()
      .update()
      .set({ lastFedTime: new Date(), health: () => "health + ((100 - health) / 2)" })
      .where({ farmId: In(farmIds), health: Between(0, 100)})
      .execute()
  }
}