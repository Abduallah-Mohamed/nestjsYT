import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestYT', {
      useNewUrlParser: true,
    }), // URI for database connection
  ],
  providers: [],
  controllers: [],
})
export class DatabaseModule {}
