import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule, MongooseModule.forRoot('mongodb://localhost/hr')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
