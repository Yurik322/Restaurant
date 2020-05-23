import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value, data) {

    if(data===1) {
      const array=value.sort((a,b)=>{
        return a.money-b.money
      });
      return array;
    }
    else if(data==-1){
      const array=value;
      return array;
    }
    else{
      const array=value.sort((a,b)=>{
        return b.money-a.money
      });
      return array;
    }
  }
}
