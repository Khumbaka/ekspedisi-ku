import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JneController } from './kurir/jne/jne.controller';
import { TikiController } from './kurir/tiki/tiki.controller';
import { PosController } from './kurir/pos/pos.controller';

@Module({
  imports: [],
  controllers: [AppController, JneController, TikiController, PosController],
  providers: [AppService],
})
export class AppModule {}
