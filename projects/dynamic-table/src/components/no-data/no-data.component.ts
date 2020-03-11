import { Component, Input } from "@angular/core";

@Component({
  selector: "kmr-no-data",
  templateUrl: "./no-data.component.html",
  styleUrls: ["./no-data.component.scss"]
})
export class NoDataComponent {
  @Input() loading = false;
}
