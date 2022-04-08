import { Test, TestingModule } from '@nestjs/testing';
import { StudyplansController } from './studyplans.controller';
import { StudyplansService } from './studyplans.service';

describe('StudyplansController', () => {
  let controller: StudyplansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudyplansController],
      providers: [StudyplansService],
    }).compile();

    controller = module.get<StudyplansController>(StudyplansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
