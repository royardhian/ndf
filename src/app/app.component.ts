import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    SwiperComponent,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
  ],
})
export class AppComponent {

  showMenu(show: boolean) {
    this.colapse = show;
  }
  title = 'ndf';
  colapse: boolean = false;

  ngOnInit() {
    console.log(window.screen.width);
    if (window.screen.width > 1024) {
      // 768px portrait
      this.colapse = true;
    }
  }

  onResize(event: any) {
    if (window.screen.width > 1024) {
      // 768px portrait
      this.colapse = true;
    }
  }
}
