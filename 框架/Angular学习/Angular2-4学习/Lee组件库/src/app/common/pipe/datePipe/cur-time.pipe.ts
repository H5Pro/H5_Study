import { Pipe, PipeTransform } from '@angular/core';
import { getCurTime } from './date';
@Pipe({
  name: 'curTime'
})
export class CurTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return getCurTime(value);
  }
}
