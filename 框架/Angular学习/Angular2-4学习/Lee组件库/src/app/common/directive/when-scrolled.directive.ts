import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appWhenScrolled]'
})

export class WhenScrolledDirective {
  @Input() loadingText = '加载中...';
  @Input() noMoreText = '已经到底了，别扯了';
  @Input() noDataText = '暂无数据,点击加载更多';
  // 开始加载更多数据时，距离底部的距离
  @Input() beginLoadBottom = 100;
  _loading: boolean;
  @Input()
  set loading (v: boolean) {
    if (this._loading !== v) {
      this._loading = v && !this.isNoData && !this.isNoMore;
      const load = this.elRef.nativeElement.loadDiv;
      if (load) {
        if (this._loading) {
          this.elRef.nativeElement.appendChild(load);
        } else {
          if (load.parentNode === this.elRef.nativeElement) {
            this.elRef.nativeElement.removeChild(load);
          }
        }
      }
      this.loadingChange.emit(v);
    }
  }
  _isNoData = false;
  @Input()
  set isNoData (v: boolean) {
    if (this._isNoData !== v) {
      this._isNoData = v && !this.isNoMore;
      const noData = this.elRef.nativeElement.noDataDiv;
      if (noData) {
        if (this._isNoData) {
          this.loading = false;
          this.elRef.nativeElement.appendChild(noData);
        } else {
          if (noData.parentNode === this.elRef.nativeElement) {
            this.elRef.nativeElement.removeChild(noData);
          }
        }
      }
    }
  }
  get isNoData () {
    return this._isNoData;
  }
  _isNoMore = false;
  @Input()
  set isNoMore (v: boolean) {
    if (this._isNoMore !== v) {
      this._isNoMore = v;
      const noMore = this.elRef.nativeElement.noMoreDiv;
      if (noMore) {
        if (v) {
          this.elRef.nativeElement.appendChild(noMore);
          this.loading = false;
          this.isNoData = false;
        } else {
          if (noMore.parentNode === this.elRef.nativeElement) {
            this.elRef.nativeElement.removeChild(noMore);
          }
        }
      }
    }
  }
  get isNoMore () {
    return this._isNoMore;
  }
  @Output() loadingChange: EventEmitter<any> = new EventEmitter();
  @Output() clickLoadMore: EventEmitter<any> = new EventEmitter();
  constructor(private elRef: ElementRef) {
    const el: any = elRef.nativeElement;
    // 加载中的提示
    const loadingHtml: any = document.createElement('div');
    loadingHtml.innerHTML = `<div class="when-scrolled-load-more">
                            ${this.loadingText}
                         </div>`;
    el.loadDiv = loadingHtml;
    // 没有更多数据的提示
    const noMoreHtml: any = document.createElement('div');
    noMoreHtml.innerHTML = `<div class="when-scrolled-no-more">
                            ${this.noMoreText}
                         </div>`;
    el.noMoreDiv = noMoreHtml;
    // 数据列表为空时的提示
    const noDataHtml: HTMLElement = document.createElement('div');
    noDataHtml.innerHTML = `<div class="when-scrolled-no-data">
                            ${this.noDataText}
                         </div>`;
    noDataHtml.onclick = () => {
      this.clickLoadMore.emit();
    };
    el.noDataDiv = noDataHtml;
    let oldScrollTop = 0;
    el.addEventListener('scroll', () => {
      if (this.isNoMore) {
        return;
      } else {
        const isScrollUp = oldScrollTop - el.scrollTop > 0;
        oldScrollTop = el.scrollTop;
        if (!isScrollUp && el.scrollTop + el.clientHeight > el.scrollHeight - this.beginLoadBottom) {
          this.loading = true;
        }
      }
    });
  }
}



