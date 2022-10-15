import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderprefix'
})
export class GenderprefixPipe implements PipeTransform {

  transform(name: unknown, ...args: unknown[]): unknown {
  let gender = args[0];
  if(gender == "male"){
    return "Mr. "+ name;
  }
  else{
    return "Mrs. "+ name;
  }
  }

}
