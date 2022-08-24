import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
// import { LoggerMiddleware } from './user/middlewares/logger.middleware';
// import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
