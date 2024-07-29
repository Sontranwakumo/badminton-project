import { Test, TestingModule } from '@nestjs/testing';
import { BranchesService } from './branches.service';
import { DatabaseModule } from '../../src/database/database.module';

describe('BranchesService', () => {
  let service: BranchesService;

  beforeEach(async () => {
    let service: BranchesService;
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [BranchesService],
    }).compile();

    service = module.get<BranchesService>(BranchesService);
  });

  it('should be defined', () => {
    console.log("hello")
  });
});
