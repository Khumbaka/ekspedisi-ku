import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//back office
// 1. domain.com/admin/user-manajemen

//front office
//domain.com/{kurir}/{fitur=cek-harga}
// 1. domain.com/JNE/cek-harga
// 2. domain.com/TIKI/cek-harga
// 3. domain.com/POS/cek-harga

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get-list-ongkir')
  getAllOngkir(): any {
    return [
      {
        dari: 'surabaya',
        ke: 'jakarta',
        mataUang: 'IDR',
        berat: '1',
        satuan: 'Kg',
        harga: '30000',
      },
      {
        dari: 'jakarta',
        ke: 'surabaya',
        mataUang: 'IDR',
        berat: '1',
        satuan: 'Kg',
        harga: '25000',
      },
    ];
  }
}
