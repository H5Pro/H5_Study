import { Pipe, PipeTransform } from '@angular/core';
import { getCurDate } from './date';
@Pipe({
  name: 'curDate'
})
export class CurDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return getCurDate(value);
  }

}
