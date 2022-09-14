import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './schemas/employee.schema';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @ApiResponse({ type: [Employee] })
  @Get()
  async getEmployees() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id) {
    return this.employeeService.findById(id);
  }

  @Put(':id')
  async updateEmployeeById(
    @Param('id') id,
    @Body() createEmployeeDto: CreateEmployeeDto,
  ) {
    return this.employeeService.updateEmployeeById(id, createEmployeeDto);
  }

  @Delete(':id')
  async deleteEmployeeById(@Param('id') id) {
    return this.employeeService.deleteById(id);
  }
}
