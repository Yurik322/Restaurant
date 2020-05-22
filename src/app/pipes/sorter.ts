import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value, by, all) {
    console.log(by);
    console.log(all);
    if (by === 'Усі' && all){
      const arr = []
      value.forEach(val => {

        val.types.sort((typeOne, typeTwo) => {
          return typeOne.prise - typeTwo.prise;
        });
        arr.push(val)
      });

      return arr;
    } else if(by === 'Усі' && !all) {
      const arr = [];
      value.forEach(val => {

        val.types.sort((typeOne, typeTwo) => {
          return typeTwo.prise - typeOne.prise;
        });
        arr.push(val)
      });

      return arr;
    }
    else if (all) {
      const some = value.filter(val => val.nameSp === by);
      console.log(some[0]);
      const arr = [];

      some.forEach(val => {

        val.types.sort((typeOne, typeTwo) => {
          return typeOne.prise - typeTwo.prise;
        });
        arr.push(val)
      });

      return arr
    } else if (!all) {
      const some = value.filter(val => val.nameSp === by);
      console.log(some[0]);
      const arr = [];

      some.forEach(val => {

        val.types.sort((typeOne, typeTwo) => {
          return typeTwo.prise - typeOne.prise;
        });
        arr.push(val)
      });

      return arr
    }

  }

}
