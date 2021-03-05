import {
 Controller,
 Post,
 Body,
 Get,
 Param,
} from '@nestjs/common';
import { FarmsService } from './farms.service';

@Controller('farms')
export class FarmsController {
  constructor(private readonly farmsService: FarmsService) {}

  @Post()
  async addFarm(@Body('name') name: string) {
    return this.farmsService.addFarm(name);
  }

  // @Get('feeding')
  // async farmFeeding() {
  //   return this.farmsService.handleFarmFeeding();
  // }

  @Get(':id')
  async getProduct(@Param('id') farmId: string) {
    const product = await this.farmsService.getFarmBuildings(farmId);
    return product;
  }

  @Get()
  async getAllFarms() {
    const products = await this.farmsService.getFarms();
    return products;
  }
}
