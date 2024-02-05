import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-mitra',
    standalone: true,
    templateUrl: './mitra.component.html',
    styleUrl: './mitra.component.scss',
    imports: [FooterComponent]
})
export class MitraComponent {

}
