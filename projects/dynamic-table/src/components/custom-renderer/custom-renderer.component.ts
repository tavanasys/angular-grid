import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TableCellConfig } from "../../shared/models/table-config";

@Component({
  selector: "kmr-custom-renderer",
  templateUrl: "./custom-renderer.component.html",
  styleUrls: ["./custom-renderer.component.scss"]
})
export class CustomRendererComponent {
  @Input() config: TableCellConfig;
  @Input() data: any;
  @Output() operationHappend = new EventEmitter();
  @Output() rowSelected = new EventEmitter();
}
