import { Component, OnInit } from '@angular/core';
import {NoDepsService} from '../../services/no-deps.service';

@Component({
  selector: 'app-test-me',
  templateUrl: './test-me.component.html',
  styleUrls: ['./test-me.component.css'],
  providers: [NoDepsService]
})
export class TestMeComponent implements OnInit {

  public message: string;

  constructor(public noDeps: NoDepsService) { }

  ngOnInit() {
    this.message = 'OnInit';
  }

  public showError(): void {
    this.message = 'Error';
  }
}
