import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-child',
  templateUrl: './password-child.component.html',
  styleUrls: ['./password-child.component.css']
})
export class PasswordChildComponent implements OnInit {

  constructor() { }

  @Input() password: string;

  ngOnInit(): void {
  }

}
