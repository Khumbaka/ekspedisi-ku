import { Test, TestingModule } from '@nestjs/testing';
import { JneController } from './jne.controller';

describe('JneController', () => {
  let controller: JneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JneController],
    }).compile();

    controller = module.get<JneController>(JneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
