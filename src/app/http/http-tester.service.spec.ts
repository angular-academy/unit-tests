import { TestBed } from '@angular/core/testing';

import { HttpTesterService } from './http-tester.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HttpTesterService', () => {
  let service: HttpTesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.get(HttpTesterService);
  });

  it('should get luke wit a real rest call', function (done: DoneFn) {
    service.getLuke$().subscribe(luke => {
      console.log(luke);
      expect(luke.name).toEqual('Luke Skywalker');
      done();
    });
  });

  it('should get luke(1), leia(5) and darth vader(4)', function (done: DoneFn) {
    fail('implement me please :(');
  });
});

describe('HttpTesterService, but this time we mock it', () => {
  let service: HttpTesterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(HttpTesterService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should get luke wit a faked rest call', function (done: DoneFn) {
    const expected = 'Luke Groundwalker';
    const mock = {name: expected};

    service.getLuke$().subscribe(luke => {
      console.log(luke);
      expect(luke.name).toEqual(expected);
      done();
    });

    const req = httpTestingController.expectOne('https://swapi.co/api/people/1/');

    expect(req.request.method).toEqual('GET');
    expect(req.cancelled).toEqual(false);

    req.flush(mock);
  });

  it('should get luke(1), leia(5) and darth vader(4) with a faked rest call', function () {
    fail('implement me pls :(');
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
