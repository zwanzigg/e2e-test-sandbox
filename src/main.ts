import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {TransformInterceptor} from "./interceptors/transform.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(5000);
}

bootstrap();
