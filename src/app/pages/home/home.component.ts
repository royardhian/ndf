import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SwiperComponent } from '../../components/swiper/swiper.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    MatExpansionModule,
    SwiperComponent,
    MatIconModule,
    FooterComponent,
    CommonModule,
    MatListModule,
    MatCardModule
  ],
})
export class HomeComponent {
  faq: { title: string; content: string }[] = [
    {
      title: 'Lokasi dimana?',
      content: `<p><strong>Ciledug</strong></p>
    <p>Ciledug Mas, Jl. HOS Cokroaminoto, RT.003/RW.004, Sudimara Tim., Kec. Ciledug, Kota Tangerang, Banten 15151
    <p><strong>Bintaro</strong></p>
    <p>Pd. Jagung Tim., Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15326</p>
    <p><strong>Gading Serpong</strong></p>
    <p>Ruko Pasar Modern Paramount, Jl. Boulevard Raya Gading Serpong No.12 Blok E, Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810</p>
    `,
    },
    {
      title: 'Berapa hari proses pengerjaan?',
      content: 'Proses pengerjaan selama 1-2 hari. ',
    },

    {
      title: 'Ada layanan apa saja?',
      content:
        'NDF Coating & Car Wash terdapat layanan nano ceramic coating, glass coating, auto detailing, car wash, rush protection, poles kaca, cozy karpet, fogging disinfektan, maintenance, dan home service.',
    },

    {
      title: 'Apakah coatingnya bisa untuk semua jenis kendaraan?',
      content:
        'Coating di NDF tidak terbagi-bagi dalam beberapa jenis maupun ukuran. Jadi, coating di NDF bisa all size dan all type.',
    },

    {
      title: 'Apakah bisa untuk kendaraan motor?',
      content:
        'Tidak hanya untuk kendaraan mobil, NDF juga terdapat layanan untuk kendaraan motor.',
    },

    {
      title: 'Garansi berapa tahun?',
      content: 'Garansi mulai dari 1 hingga 3 tahun',
    },

    {
      title: 'Perbedaan platinum dan gold?',
      content:
        'Walaupun menggunakan obat yang sama yaitu coating 9h. namun terdapat perbedaan yaitu platinum garansinya lebih lama dari gold. Serta platinum mendapatkan free maintenance sekali. Daya tahan platinum lebih lama dari gold yaitu 2-3 tahun.',
    },

    {
      title: 'Ada layanan home service?',
      content:
        'Ada. layanan home service yaitu pengerjaannya tetap di tempat pelanggan, biasanya di rumah. Harga untuk home service mulai dari 100.000 dan berlaku kelipatan setiap 5 KM.',
    },

    {
      title: 'Ada layanan pick up delivery?',
      content:
        'Ada. layanan pick up delivery yaitu antar jemput kendaraan namun pengerjaannya tetap di workshop NDF. Harga untuk pick up delivery mulai dari 100.000 dan berlaku kelipatan setiap 5 KM.',
    },

    {
      title: 'Adakah rekomendasi paket coating?',
      content:
        'Paket gold telah menjadi paket yang best sellernya. Lalu untuk paket terfavorit jatuh kepada paket platinum. Sedangkan paket ultimate, telah menjadi paket paling premium NDF. Harga bervariasi mulai dari 1.500.000 hingga 3.000.000. ',
    },
  ];
}
