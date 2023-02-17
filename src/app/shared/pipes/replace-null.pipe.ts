import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'replaceNull'
})
export class ReplaceNullPipe implements PipeTransform {

  transform(value: string | number | object | null | undefined, replaceText: string = 'No Info '): string | number | object {
    if (typeof value === "undefined" || value === null) {
      return replaceText
    }
    return value;
  }

}
