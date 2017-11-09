import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appWhenScrolled]'
})

export class WhenScrolledDirective {
  _loading: boolean;
  @Input()
  set loading (v: boolean) {
    if (this._loading !== v) {
      this._loading = v;
      const html: Element = this.elRef.nativeElement.loadDiv;
      if (!v && html && html.parentNode) {
        html.parentNode.removeChild(html);
        this.elRef.nativeElement.loadDiv = null;
      }

      this.loadingChange.emit(v);
    }
  }
  @Output() loadingChange: EventEmitter<any> = new EventEmitter();
  constructor(private elRef: ElementRef) {
    const el: any = elRef.nativeElement;
    let oldScrollTop = 0;
    el.addEventListener('scroll', () => {
      console.log(123);
      const isScrollUp = oldScrollTop - el.scrollTop > 0;
      oldScrollTop = el.scrollTop;
        if (!isScrollUp && el.scrollTop + el.clientHeight > el.scrollHeight - 30) {
          if (!el.loadDiv) {
            const html: Element = document.createElement('div');
            html.innerHTML = `<div class="">
                            加载中
                         </div>`;
            el.loadDiv = html;
            el.appendChild(el.loadDiv);
            this.loading = true;
          }
        }
    });
  }
}



