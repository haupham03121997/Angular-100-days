import { Component , ElementRef, QueryList, ViewChild, ViewChildren, ViewContainerRef ,  } from '@angular/core';
import { listRooms} from 'src/constants/data.rooms';
import { Room } from 'src/modals/room.interface';
import {convertVndToUsd } from 'src/common'
import { ToggleComponent } from './toggle/toggle.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChildren(ToggleComponent) toggleCom !: QueryList<ToggleComponent>;
  @ViewChild('toggleButton' , { static : true}) toggleButton !: ElementRef<HTMLButtonElement>;
  @ViewChild('inputElement', { static : true , read: ElementRef }) inputElement!: ElementRef<HTMLInputElement>;

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
  isChecked : boolean = true

  handleClickMe= (event: Event)=>{
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

  ngOnInit(){
    // console.log("ngOnInit", this.toggleCom)
    this.toggleCom.changes.subscribe(console.log)
  }

  ngAfterViewInit() {
    // console.log("ngAfterViewInit", this.toggleCom)
    
    console.log("ngAfterViewInit", this.inputElement)
    // this.inputElement.nativeElement.focus()
  }
}
