import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import * as request from 'supertest';
import {AppModule} from '../src/modules/app/app.module';
import {ConfigService} from "@nestjs/config";

describe('ConfigController (e2e)', () => {
  let app: INestApplication;
  let productionHost: string;
  let configService: ConfigService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [ConfigService]
    }).compile();
    configService = moduleFixture.get<ConfigService>(ConfigService);

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Config Service should be defined', () => {
    expect(configService).toBeDefined();
  });

  it('get production host value', () => {
    productionHost = configService.get('prod_host')
    return request(app.getHttpServer())
      .get('/config/host')
      .expect(200)
      .expect(productionHost);
  });

  afterAll(async () => {
    await app.close();
  });
});
