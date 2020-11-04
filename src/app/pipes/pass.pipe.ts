import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'pass'
})


export class PassPipe implements PipeTransform {
  transform(value: string, activar:boolean): any {
    
    if(activar){
      
      return '*'.repeat(value.length);

    }else{
      return value;
    }
  }

}
