import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mySort', // pure - onpageload , not on push
  pure: false    //  impure - onpageload , on data push
})
export class MySortPipe implements PipeTransform {

  transform(arr:any): any {
    return arr.sort((p:any,q:any)=> p - q );
  }

}
