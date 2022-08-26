import { Component } from '@angular/core';
import { listRooms} from 'src/constants/data.rooms';
import { Room } from 'src/modals/room.interface';
import {convertVndToUsd } from 'src/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDanger : boolean = false;

  rooms: Room[] = listRooms
  hasLiked : boolean = false

  title = 'angular_100_days';
  name ="John Doe";
  user = {
    name : 'Hau Pham',
    age:16
  }
  inputType = "text"

  handleClickMe= (event: any )=>{
    console.log(event)
    this.inputType = "password"
  }

  convertPrice = (price: number) => {
    return convertVndToUsd(price)
  }

  handleLike = () => {
    this.hasLiked = !this.hasLiked
  }

  receiveOnLikeFromChild = (hasLiked: boolean) => {
    console.log("receiveOnLikeFromChild", hasLiked)
  }

}
