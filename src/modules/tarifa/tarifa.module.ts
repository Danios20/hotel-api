import { Module } from '@nestjs/common';
import { TarifaService } from './tarifa.service';
import { TarifaController } from './tarifa.controller';

@Module({
  controllers: [TarifaController],
  providers: [TarifaService],
})
export class TarifaModule {}
