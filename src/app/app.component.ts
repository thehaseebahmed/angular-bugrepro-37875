import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Click the button below!";

  constructor(private $http: HttpClient) {}

  public makeApiCall() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .subscribe((response: any) => {
        this.title = response.title;
      });
  }
}
