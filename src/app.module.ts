import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, UserModule, MongooseModule.forRoot('mongodb+srv://abhimanyukr399:bGVypU0463oUgmfj@firecluster.r4jsl.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
