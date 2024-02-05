import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatDialog } from '@angular/material/dialog';
import { WorkshopPopUpComponent } from '../../components/popup/workshop-pop-up/workshop-pop-up.component';
import { CommonModule } from '@angular/common';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-workshop',
  standalone: true,
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.scss',
  imports: [FooterComponent, CommonModule, MatListModule],
})
export class WorkshopComponent {
  wokshopDatas: {
    nama: string;
    alamat: string;
    link: string;
    image: string;
  }[] = [
    {
      nama: 'CILEDUG',
      alamat:
        'Ciledug Mas, Jl. HOS Cokroaminoto, RT.003/RW.004, Sudimara Tim., Kec.Ciledug, Kota Tangerang, Banten 15151',
      link: 'https://maps.app.goo.gl/7wbK9X2Dv8mfSqBRA',
      image: 'assets/img/w-ciledug.png',
    },
    {
      nama: 'GRAHA RAYA BINTARO',
      alamat:
        'Pd. Jagung Tim., Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15326',
      link: 'https://maps.app.goo.gl/nVHBVPRD5MDqbZ9Y9',
      image: 'assets/img/w-bintaro.png',
    },
    {
      nama: 'GADING SERPONG',
      alamat:
        'Pasar Modern Paramount, Jl. Boulevard Raya, Gading Serpong, Blok E No. 12, Kab. Tangerang',
      link: 'https://maps.app.goo.gl/nANoMu7AUaug8R9ZA',
      image: 'assets/img/w-serpong.png',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(idWorkshop: number) {
    this.dialog.open(WorkshopPopUpComponent, {
      data: { showWorkshop: this.wokshopDatas[idWorkshop] },
    });
  }
}
