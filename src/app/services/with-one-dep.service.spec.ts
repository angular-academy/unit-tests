import { TestBed } from '@angular/core/testing';

import { WithOneDepService } from './with-one-dep.service';
import {NoDepsService} from './no-deps.service';
import {TestType} from '../service-test.interface';
import {Observable, of} from 'rxjs';

const noDepsStub: NoDepsService = {
  getTestType(): TestType {
    return {someKey: {someInnerKey: 'Stubbed'}, someOtherKey: [4, 5, 6]};
  },
  getFoo(): string {
    return 'Stubbed';
  },
  throwError(): void {
    throw new Error('Stubbed');
  },
  double(val: number): number {
    return val * 3;
  },
  getFooLater$(): Observable<string> {
    return of('Stubbed');
  }
};
describe('WithOneDepService with a stub', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: NoDepsService, useValue: noDepsStub}
    ]
  }));

  it('should be created', () => {
    const service: WithOneDepService = TestBed.get(WithOneDepService);
    expect(service).toBeTruthy();
  });

  it('should return Stubbed on getFoo', function () {
    const service: NoDepsService = TestBed.get(NoDepsService);
    fail('Not implemented yet :/');
  });

  it('should not return Foo on getFoo', function () {
    const service: NoDepsService = TestBed.get(NoDepsService);
    fail('Not implemented yet :/');
  });

  it('should have the field getFoo but not getBar', function () {
    const service: WithOneDepService = TestBed.get(WithOneDepService);
    fail('Not implemented yet :/');
  });

  it('should make a difference between toEqual and toBe', function () {
    const service: WithOneDepService = TestBed.get(WithOneDepService);
    // the same as in NoDepsService
    const tester: TestType = {someKey: {someInnerKey: 'INNER'}, someOtherKey: [1, 2, 3]};
    let fromMethod: TestType = service.getTestType();
    // same content, different ref!
    fail('Not implemented yet :/');
  });

  it('should throw an error', function () {
    const service: WithOneDepService = TestBed.get(WithOneDepService);
    fail('Not implemented yet :/');
  });

  it('should return getSomething$ in the future', function (done: DoneFn) {
    const service: WithOneDepService = TestBed.get(WithOneDepService);
    fail('Not implemented yet :/');
  });
});

describe('WithOneDepService with a manually created spy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({

    });
  });

  it('should be created', () => {
    const service: WithOneDepService = TestBed.get(WithOneDepService);
    expect(service).toBeTruthy();
  });

  it('should spy', function () {
    const svc: NoDepsService = TestBed.get(NoDepsService);
    const svc2: NoDepsService = TestBed.get(WithOneDepService);
    const spy: jasmine.Spy = spyOn(svc, 'double');
    spy.and.returnValue(29);
    svc2.double(3);
    console.log(spy.calls.first());
  });

  it('should mock something by spy', function () {
    const svc: NoDepsService = TestBed.get(NoDepsService);
    const svc2: NoDepsService = TestBed.get(WithOneDepService);
    const spy: jasmine.Spy = spyOn(svc, 'double');
    spy.and.callFake((x: number) => x * 3 );
    const value = 13;
    const result = svc2.double(value);
    expect(result).toEqual(value * 3);
  });
});
