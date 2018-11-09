import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFixedCenter]'
})
export class FixedCenterDirective {

  constructor(private elRef: ElementRef) {
    const el = elRef.nativeElement;
    el.style.visibility = 'hidden';
    let oldHeight = 0;
    setInterval(() => {
      if (oldHeight !== el.clientHeight && el.clientHeight > 100) {
        oldHeight = el.clientHeight;
        let top = (window.innerHeight - el.clientHeight) / 2;
        if (top < 100) {
          top = 100;
        }
        el.style.visibility = 'visible';
        el.style.marginTop = top + 'px';
      }
    }, 50);
  }

}
