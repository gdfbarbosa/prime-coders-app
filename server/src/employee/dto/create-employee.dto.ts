import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: boolean;
  @ApiProperty()
  startDate: Date;
  @ApiProperty()
  startDateCooperative: Date;
}
