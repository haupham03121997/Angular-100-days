import { Component } from "@angular/core";

@Component({
  selector: "app-hello",
  template: `<span>Hello {{ user.name}}</span>`, // inline template
  styles: [``]
})

export class HelloComponent {
  user = {
    name: "John Doe",
    age: 30
  }
}