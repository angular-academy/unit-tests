import { TestBed } from '@angular/core/testing';

import { NoDepsService } from './no-deps.service';
import {TestType} from '../service-test.interface';

describe('NoDepsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoDepsService = TestBed.get(NoDepsService);
    expect(service).toBeTruthy();
  });

  it('should have some useful methods in the testing framework', function () {
    expect(3 + 4).toBeGreaterThan(6);
    expect(3 + 4 + 0.2).toBeCloseTo(7.1, 0);
    expect(3 + 4 + 0.2).not.toBeCloseTo(7.1, 1);
    expect(3 + 4).toBeLessThanOrEqual(50);
    expect(3 + 4 + +'Pullover').toBeNaN();
  });

  it('should return Foo on getFoo', function () {
    const service: NoDepsService = TestBed.get(NoDepsService);
    fail('Not implemented yet :/');
  });

  it('should not return Bar on getFoo', function () {
    const service: NoDepsService = TestBed.get(NoDepsService);
    fail('Not implemented yet :/');
  });

  it('should have the field getFoo but not getBar', function () {
    const service: NoDepsService = TestBed.get(NoDepsService);
    fail('Not implemented yet :/');
  });

  it('should make a difference between toEqual and toBe', function () {
    const service: NoDepsService = TestBed.get(NoDepsService);
    // the same as in NoDepsService
    const tester: TestType = {someKey: {someInnerKey: 'INNER'}, someOtherKey: [1, 2, 3]};
    let fromMethod: TestType = service.getTestType();
    // same content, different ref!
    fail('Not implemented yet :/');
  });

  it('should throw an error', function () {
    const service: NoDepsService = TestBed.get(NoDepsService);
    fail('Not implemented yet :/');
  });

  it('should return getSomething$ in the future', function (done: DoneFn) {
    const service: NoDepsService = TestBed.get(NoDepsService);
    fail('Not implemented yet :/');
  });
});
