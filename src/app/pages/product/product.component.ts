import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  imports: [FooterComponent, MatListModule],
})
export class ProductComponent {}
