import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Room } from 'src/modals/room.interface';
import {convertVndToUsd } from 'src/common'

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {

  @Input() item : Room = {} as Room;
  @Output() onLike = new EventEmitter<boolean>();
  hasLiked : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  handleLike(){
    this.hasLiked = !this.hasLiked;
    this.callFunctionToParent()
  }
  convertPrice = (price: number) => {
    return convertVndToUsd(price)
  }

   callFunctionToParent = () => {
    this.onLike.emit(this.hasLiked);
  }

}
