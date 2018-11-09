import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollFixTop]'
})
export class ScrollFixTopDirective implements OnInit {
  @Input ('appScrollFixTop') fixedHeader: HTMLElement;
  constructor(private elRef: ElementRef)  {
  }
  ngOnInit () {
    const el: HTMLElement = this.elRef.nativeElement;
    let target: HTMLElement = null;
    el.addEventListener('scroll', () => {
      const targets = el.getElementsByClassName('section-header');
    /*  if (target) {
        let index = 0;
        for (let i = 0; i < targets.length; i++) {
          const obj = targets[i];
          if (obj === target) {
            index = i;
          }
        }
        if (target.offsetTop - el.offsetTop - el.scrollTop > 0) {
          if (index > 0 && (<HTMLElement>targets[index - 1]).offsetTop - el.offsetTop - el.scrollTop < 0) {
            target = <HTMLElement>targets[index - 1];
          }
        } else {
          if (index < targets.length - 1 && (<HTMLElement>targets[index + 1]).offsetTop - el.offsetTop - el.scrollTop < 0) {
            target = <HTMLElement>targets[index + 1];
          }
        }
        if (this.fixedHeader) {
          this.fixedHeader.innerHTML = target.innerText;
        }
      } else {*/
        for (let i = 0; i <= targets.length; i++) {
          const obj = <HTMLElement>targets[i];
          const top = obj.offsetTop - el.offsetTop - el.scrollTop;
          if (top > 0) {
            if (i > 0) {
              target =  <HTMLElement>targets[i - 1];
            } else {
              target = obj;
            }
            if (this.fixedHeader) {
              this.fixedHeader.innerHTML = target.innerText;
            }
            break;
          }
        }
      // }
    });
  }
}
