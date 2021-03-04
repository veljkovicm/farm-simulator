import {
 Controller, Post, Body, Get, Param, Patch, 
} from '@nestjs/common';
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  async addUnit(
    @Body('buildingId') buildingId: string
  ) {
    const unit = await this.unitsService.addUnit(buildingId);

    return unit;
  }

  @Get(':id')
  async getUnits(@Param('id') buildingId: string) {
    const products = await this.unitsService.getUnits(buildingId);
    return products;
  }

  @Patch()
  feedUnit(@Body('id') unitId: string) {
    return this.unitsService.feedUnit(unitId);
  }
}
