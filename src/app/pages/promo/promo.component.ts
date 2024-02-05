import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { PromoPopUpComponent } from '../../components/popup/promo-pop-up/promo-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promo',
  standalone: true,
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss',
  imports: [FooterComponent, CommonModule],
})
export class PromoComponent {
  constructor(public dialog: MatDialog) {}

  wokshopDatas: {
    title: string;
    image: string;
    harga: string;
    html: string;
  }[] = [
    {
      title: 'Paket Gold',
      image: 'assets/img/pn1.jpeg',
      harga: `Harga dari <del>3.500.000</del> menjadi 1.750.000`,
      html: `<div class="text-white shadow-md rounded-lg">
      <p class="text-l">
          Paket Gold Nano Ceramic Coating 3 Layers adalah pelindung cat, yang dilengkapi dengan garansi selama satu
          tahun.
          Selain melindungi dari polutan, debu, kotoran, jamur, dan hujan asam. Cat mobil tidak akan berubah warna,
          terlihat basah, dan mudah dibersihkan karena kedap udara.
      </p>
      <h3>Kelebihan:</h3>
      <ul class="list-disc list-inside">
          <li>All Type</li>
          <li>All Size</li>
          <li>Garansi 1 tahun</li>
          <li>Paint Protection</li>
          <li>Mencegah pudarnya warna dari cat kendaraan. .</li>
          <li>Tampak lembab dan mudah dibersihkan</li>
          <li>Mengkilap dan tampak lembap</li>
          <li>Mengering dengan cepat setelah aplikasi</li>
          <li>Menggunakan coating 9h </li>
      </ul>
  </div>`,
    },
    {
      title: 'Paket Platinum',
      image: 'assets/img/pn2.jpeg',
      harga: `Harga dari <del>4.000.000</del> menjadi 2.000.000`,
      html: `<div class="text-white shadow-md rounded-lg">
      <p class="text-l">
          Paket Platinum Nano Ceramic Coating 3 Layers adalah pelindung cat, yang dilengkapi dengan garansi selama dua
          tahun. Selain melindungi dari polutan, debu, kotoran, jamur, dan hujan asam. Cat mobil tidak akan berubah
          warna,
          terlihat basah, dan mudah dibersihkan karena kedap udara.
      </p>
      <h3>Kelebihan:</h3>
      <ul class="list-disc list-inside">
          <li>All Type</li>
          <li>All Size</li>
          <li>Garansi 2 tahun</li>
          <li>Paint Protection</li>
          <li>Mencegah pudarnya warna dari cat kendaraan. .</li>
          <li>Tampak lembab dan mudah dibersihkan</li>
          <li>Mengkilap dan tampak lembap</li>
          <li>Mengering dengan cepat setelah aplikasi</li>
          <li>Menggunakan coating 9h</li>
          <li>Maintenance sekali </li>
      </ul>
  </div>`,
    },
    {
      title: 'Paket Ultimate',
      image: 'assets/img/pn3.jpeg',
      harga: `Harga dari <del>6.000.000</del> menjadi 3.000.000`,
      html: ` <div class="text-white shadow-md rounded-lg">
      <p class="text-l">
          Paket Ultimate Nano Ceramic Coating 3 Layers adalah pelindung cat, yang dilengkapi dengan garansi selama
          tiga
          tahun. Selain melindungi dari polutan, debu, kotoran, jamur, dan hujan asam. Cat mobil tidak akan berubah
          warna,
          terlihat basah, dan mudah dibersihkan karena kedap udara.
      </p>
      <h3>Kelebihan:</h3>
      <ul class="list-disc list-inside">
          <li>All Type</li>
          <li>All Size</li>
          <li>Garansi 3 tahun</li>
          <li>Paint Protection</li>
          <li>Mencegah pudarnya warna dari cat kendaraan. .</li>
          <li>Tampak lembab dan mudah dibersihkan</li>
          <li>Mengkilap dan tampak lembap</li>
          <li>Mengering dengan cepat setelah aplikasi</li>
          <li>Menggunakan coating 10h</li>
          <li>Maintenance sekali </li>
      </ul>
  </div>`,
    },
    {
      title: 'Paket Motor',
      image: 'assets/img/p4.jpg',
      harga: `Harga dari <del>1.500.000</del> menjadi 750.000`,
      html: `<div class="text-white shadow-md rounded-lg">
      <p class="text-l">
          Paket Motor Nano Ceramic Coating adalah pelindung cat, yang dilengkapi dengan garansi selama satu tahun.
          Selain
          melindungi dari polutan, debu, kotoran, jamur, dan hujan asam. Cat mtorl tidak akan berubah warna, terlihat
          basah, dan mudah dibersihkan karena kedap udara.
      </p>
      <h3>Kelebihan:</h3>
      <ul class="list-disc list-inside">
          <li>All Type</li>
          <li>All Size</li>
          <li>Garansi 1 tahun</li>
          <li>Paint Protection</li>
          <li>Mencegah pudarnya warna dari cat kendaraan. .</li>
          <li>Tampak lembab dan mudah dibersihkan</li>
          <li>Mengkilap dan tampak lembap</li>
          <li>Mengering dengan cepat setelah aplikasi</li>
          <li>Menggunakan coating 9h </li>
      </ul>
  </div>`,
    },
  ];

  openPopup(idWorkshop: number) {
    this.dialog.open(PromoPopUpComponent, {
      data: { showWorkshop: this.wokshopDatas[idWorkshop] },
    });
  }
}
