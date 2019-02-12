import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMeComponent } from './test-me.component';
import {NoDepsService} from '../../services/no-deps.service';

describe('TestMeComponent', () => {
  let component: TestMeComponent;
  let fixture: ComponentFixture<TestMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMeComponent ]
    });
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message OnInit and change it to Error on showError', function () {
    fail('implement me :/');
  });

  it('should have the NoDepsService as public attribute', function () {
    const noDeps = TestBed.get(NoDepsService);
    fail('implement me :/');
  });

  it('should render the header in a h1 tag', function () {
    fail('implement me :/');
  });

  it('should show any desired message on the paragraph with id message', function () {
    fail('implement me :/');
  });

  it('should have class msg on the paragraph', function () {
    fail('implement me :/');
  });
});
