import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_100_days';
  name ="John Doe";
  user = {
    name : 'Hau Pham',
    age:24
  }
  inputType = "text"
  handleClickMe= (event: any )=>{
    console.log(event)
    this.inputType = "password"
  }
}
