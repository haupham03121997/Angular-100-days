import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TabPanelComponent } from "./tab-panel.component";

@Component({
  selector: "app-tab-group",
  template: `
    <div class="tab-group"></div>`,
    styles: []
})
export class TabGroupComponent {
  tabPanelList : TabPanelComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange  = new EventEmitter<number>();
   
  addTab(tab : TabPanelComponent){
    this.tabPanelList = [...this.tabPanelList, tab];
  }
  
  removeTab(tab : TabPanelComponent){
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tp , index) => {
      if(tp === tab){
        found = index;
        return false;
      }
      return true;
    })
  }
}