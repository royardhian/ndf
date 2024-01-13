import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SwiperComponent } from "../../swiper/swiper.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MatExpansionModule, SwiperComponent]
})
export class HomeComponent {}
