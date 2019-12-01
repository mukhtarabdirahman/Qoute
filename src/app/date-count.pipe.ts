import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
   transform(value: any, arg?: any): any{
     arg = new Date(Date.now());
    const answer = arg.getFullYear() - value.getFullYear();
    if(answer===1){
      return answer + ' year ago'
    }else if(answer > 1){
      return answer + ' years ago'
    }else{
      return 'Just now'
    }
  }
}
