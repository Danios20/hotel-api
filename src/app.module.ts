import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './modules/hotel/hotel.module';
import { HabitacionModule } from './modules/habitacion/habitacion.module';
import { ReservaModule } from './modules/reserva/reserva.module';
import { TarifaModule } from './modules/tarifa/tarifa.module';

@Module({
  imports: [HotelModule, HabitacionModule, ReservaModule, TarifaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
