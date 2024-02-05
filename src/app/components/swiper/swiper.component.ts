import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  Component,
  NgZone,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { HighlightDirective } from '../../highlight.directive';
import { SwiperDirective } from '../../directive/swiper.directive';
register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SwiperDirective],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
})
export class SwiperComponent {
  index = 0;
  @ViewChild('newSwiper', { static: false }) swiperRef: any;
  swiper?: Swiper;

  pageSize = 1;

  jancok: SwiperOptions = {
    injectStyles: [
      `
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
      }

      .swiper-pagination-bullet-active {
        color: #fff;
        background: #fff;
      }
      `,
    ],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
  };

  prev: boolean = false;
  next: boolean = false;
  activeIndex: number = 0;

  constructor(private cdRef: ChangeDetectorRef, private ngZone: NgZone) {}

  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
}
