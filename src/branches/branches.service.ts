import { Injectable } from '@nestjs/common';
import { CreateCourtDto } from './dto/create-court.dto';
import { CourtInfo } from '../../src/entities/courtinfo.entity';
@Injectable()
export class BranchesService {
  constructor() {}

 async createCourt(id: string, createCourtDto: CreateCourtDto) {
    const court = await CourtInfo.create({
      ...createCourtDto,
      id_branch:id,
      comments: [],
    }).save();
    console.log(court);

    await CourtInfo.createQueryBuilder().insert()
    return JSON.stringify(court);
  }

  findAll() {
    return `This action returns all branches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} branch`;
  }

  remove(id: number) {
    return `This action removes a #${id} branch`;
  }
}
