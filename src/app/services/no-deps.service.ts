import {Injectable} from '@angular/core';
import {ServiceTest, TestType} from '../service-test.interface';
import {interval, Observable} from 'rxjs';
import {map, skip, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoDepsService implements ServiceTest {

  constructor() {
  }

  double(val: number): number {
    return val * 2;
  }

  getFoo(): string {
    return 'Foo';
  }

  /**
   * returns 'Foo' after 1.5 sec
   */
  getFooLater$(): Observable<string> {
    return interval(500).pipe(
      skip(2),
      take(1),
      map(() => this.getFoo())
    );
  }

  throwError(): void {
    throw new Error('Throws an Error');
  }

  getTestType(): TestType {
    return {someKey: {someInnerKey: 'INNER'}, someOtherKey: [1, 2, 3]};
  }
}
