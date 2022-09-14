import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @ApiProperty()
  @Prop()
  firstName: string;
  @ApiProperty()
  @Prop()
  lastName: string;
  @ApiProperty()
  @Prop()
  startDate: Date;
  @ApiProperty()
  @Prop()
  startDateCooperative: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
