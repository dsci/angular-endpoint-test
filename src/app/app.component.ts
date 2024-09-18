import { Component, ElementRef } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-test';
  data: string;
  another: any;

  constructor(private rest: RestService, private el:ElementRef) {
    this.data = this.rest.data.foo.word;
  }

  async clickMe(){
    this.another = await this.rest.getAnother();
  }
}
