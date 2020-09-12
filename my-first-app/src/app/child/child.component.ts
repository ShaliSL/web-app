import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private router: Router) { }

  @Output() loginEvent = new EventEmitter<string>();

  data:string = 'Login successful';

  ngOnInit(): void {
  
  }

  login() {
    this.loginEvent.emit(this.data);
  }
}
