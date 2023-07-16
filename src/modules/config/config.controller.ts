import {Controller, Get} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {
  }

  @Get('host')
  public getProductionHost(): string {
    return this.configService.get('prod_host');
  }
}
