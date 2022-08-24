import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { customerSchema } from './schema/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: customerSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class CustomerModule {}
