import { Injectable } from '@angular/core';
import {ServiceTest, TestType} from '../service-test.interface';
import {Observable} from 'rxjs';
import {NoDepsService} from './no-deps.service';

@Injectable({
  providedIn: 'root'
})
export class WithOneDepService implements ServiceTest {

  private _somePrivateStuff = 'Private';

  constructor(private _noDeps: NoDepsService) { }

  get somePrivateStuff(): string {
    return this._somePrivateStuff;
  }

  double(val: number): number {
    return this._noDeps.double(val);
  }

  getFoo(): string {
    return this._noDeps.getFoo();
  }

  getFooLater$(): Observable<string> {
    return this._noDeps.getFooLater$();
  }

  throwError(): void {
    return this._noDeps.throwError();
  }

  getTestType(): TestType {
    return this._noDeps.getTestType();
  }

}
