import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { CreateCourtDto } from './dto/create-court.dto';

@Controller('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Post()
  create(@Body() create){

  }

  @Post(':id/courts')
  createCourt(@Param('id') id: string, @Body() createCourtDto: CreateCourtDto) {
  
    return this.branchesService.createCourt(id,createCourtDto);
  }

  @Get()
  findAll() {
    return this.branchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.branchesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.branchesService.remove(+id);
  }
}
