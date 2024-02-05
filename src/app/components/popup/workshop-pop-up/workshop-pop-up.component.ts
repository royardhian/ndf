import { Component, Inject } from '@angular/core';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-workshop-pop-up',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './workshop-pop-up.component.html',
  styleUrl: './workshop-pop-up.component.scss',
})
export class WorkshopPopUpComponent {
  constructor(
    private dialogRef: MatDialogRef<WorkshopPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    console.log(this.data);

    this.showWorkshop = data.showWorkshop;
  }

  showWorkshop!: { nama: string; alamat: string; link: string; image: string };

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
