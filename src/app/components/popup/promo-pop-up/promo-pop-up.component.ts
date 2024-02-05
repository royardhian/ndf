import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { WorkshopPopUpComponent } from '../workshop-pop-up/workshop-pop-up.component';

@Component({
  selector: 'app-promo-pop-up',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './promo-pop-up.component.html',
  styleUrl: './promo-pop-up.component.scss',
})
export class PromoPopUpComponent {
  constructor(
    private dialogRef: MatDialogRef<WorkshopPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    console.log(this.data);

    this.showWorkshop = data.showWorkshop;
  }

  showWorkshop!: { title: string; image: string; harga: string; html: string };
}
