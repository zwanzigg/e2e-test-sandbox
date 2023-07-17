import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import * as request from 'supertest';
import {AppModule} from '../src/modules/app/app.module';
import {TransformInterceptor} from "../src/interceptors/transform.interceptor";

describe('Transformer Interceptor (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalInterceptors(new TransformInterceptor());

    await app.init();
  });

  it('attaches headers to every response (case 1)', () => {
    return request(app.getHttpServer())
      .get('/config/host')
      .expect(200)
      .expect('on-running', 'always');
  });

  it('attaches headers to every response (case 2)', () => {
   return request(app.getHttpServer())
      .get('/hello')
      .expect(200)
      .expect('on-running', 'always');
  });
});
