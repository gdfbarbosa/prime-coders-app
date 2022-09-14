import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee, EmployeeDocument } from './schemas/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    return createdEmployee.save();
  }

  async updateEmployeeById(
    id,
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeModel.findOneAndReplace(
      { _id: new Types.ObjectId(id) },
      createEmployeeDto,
    );
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findById(id): Promise<Employee> {
    return this.employeeModel.findById(id).exec();
  }

  async deleteById(id): Promise<boolean> {
    await this.employeeModel.deleteOne({ _id: new Types.ObjectId(id) });
    return true;
  }
}
