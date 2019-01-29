import {Observable} from 'rxjs';

export interface TestType {
  someKey: {
    someInnerKey: string;
  };
  someOtherKey: number[];
}

export interface ServiceTest {
  double(val: number): number;
  getFoo(): string;
  throwError(): void;
  getFooLater$(): Observable<string>;
  getTestType(): TestType;
}
