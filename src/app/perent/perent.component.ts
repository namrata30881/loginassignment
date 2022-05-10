import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perent',
  // selector:  'app-child',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css']
})
export class PerentComponent implements OnInit {
  parentData = "";

  name: string = "";
  email: string = "";
  mobileno: string = "";
  obj: any = "";
  fevouritetopic: string = "";
  gender: string = "";


  constructor() { }

  ngOnInit(): void {
  }
  submitdata() {
    this.obj = { name: this.name, email: this.email, mobileno: this.mobileno, fevouritetopic: this.fevouritetopic, gender: this.gender };
    console.log(this.obj);

    //   <button type="show" (click)="show()">show</button>
    // 

  }
}
