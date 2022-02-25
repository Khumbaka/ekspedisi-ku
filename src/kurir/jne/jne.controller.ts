import { Controller, Get } from '@nestjs/common';
import { Starter } from 'rajaongkir-nodejs';

@Controller('jne')
export class JneController {
  @Get('biaya')
  async getBiaya() {
    const RajaOngkir = Starter('41703a8bfd21dfa7eec192f6d55fabe6');
    const result = await RajaOngkir.getProvinces();
    return result;
  }
}
