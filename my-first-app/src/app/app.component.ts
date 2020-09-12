import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  email: string;
  password: string;
  message: string;

  ngOnInit(){
  }

  receiveData($event){
    this.message = $event; 
    console.log(this.message,'message');
  }


}
