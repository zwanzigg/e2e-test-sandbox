import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {AppController} from './app.controller';
import {ConfigModule} from "@nestjs/config";
import configuration from "../../config/configuration";
import {ConfigController} from "../config/config.controller";
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        PROD_HOST: Joi.string().required(),
      }),
    })
  ],
  controllers: [AppController, ConfigController],
  providers: [AppService],
})
export class AppModule {
}

