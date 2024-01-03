import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './task/tasks/tasks.module';

@Module({
  imports: [TasksModule,DatabaseModule,MongooseModule.forRoot('mongodb://localhost:27017/nest-mongo-crud', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
