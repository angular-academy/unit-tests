import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: number, args1: number, args2: number): number {
    return value + args1 + args2;
  }

}
