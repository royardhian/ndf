import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Directive({
  selector: '[swiperElement]',
  standalone: true,
})
export class SwiperDirective {
  private readonly swiperElement: HTMLElement;
  @Input('config')
  config?: SwiperOptions;

  constructor(private element: ElementRef<HTMLElement>) {
    this.swiperElement = element.nativeElement;
  }

  ngAfterViewInit(): void {
    Object.assign(this.element.nativeElement, this.config);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore - We ignore this because there is no initialize method on the HTMLElement
    this.swiperElement.initialize();
  }
}
