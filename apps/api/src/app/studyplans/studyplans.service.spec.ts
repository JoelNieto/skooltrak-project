import { Test, TestingModule } from '@nestjs/testing';
import { StudyplansService } from './studyplans.service';

describe('StudyplansService', () => {
  let service: StudyplansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyplansService],
    }).compile();

    service = module.get<StudyplansService>(StudyplansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
