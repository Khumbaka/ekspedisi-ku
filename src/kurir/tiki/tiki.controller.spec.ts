import { Test, TestingModule } from '@nestjs/testing';
import { TikiController } from './tiki.controller';

describe('TikiController', () => {
  let controller: TikiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TikiController],
    }).compile();

    controller = module.get<TikiController>(TikiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
