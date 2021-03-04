import { BuildingService } from './buildings.service';
import {
 Controller,
 Post,
 Body,
 Get,
 Param,
} from '@nestjs/common';

@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  async addBuilding(@Body('name') name: string) {
    return this.buildingService.addFarm(name);
  }

  @Get()
  async getAllFarmBuildings() {
    return this.buildingService.getProducts();
  }

  @Get('/units/:id')
  async getBuildingUnits(@Param('id') buildingId: string) {
    const units = await this.buildingService.getBuildingFarmUnits(buildingId);
    return units;
  }

  @Post('/building')
  async createFarmBuilding(
    @Body('farmId') farmId: string,
    @Body('name') name: string,
    @Body('farmUnit') farmUnit: string,
  ) {
    return this.buildingService.createFarmBuilding(farmId, name, farmUnit);
  }
}
