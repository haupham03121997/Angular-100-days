import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-process-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.scss']
})
export class ProcessBarComponent implements OnInit {

  @Input() progress: number = 1;
  @Input() progressColor : string = "red";
  @Input() progressBackgroundColor : string = "red";
  constructor() { }

  ngOnInit(): void {
  }

}
