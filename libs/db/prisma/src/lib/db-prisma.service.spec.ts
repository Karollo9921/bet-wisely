import { Test } from '@nestjs/testing';
import { DbPrismaService } from './db-prisma.service';

describe('DbPrismaService', () => {
  let service: DbPrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DbPrismaService],
    }).compile();

    service = module.get(DbPrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
