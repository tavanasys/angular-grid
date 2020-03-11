import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { TableOptions } from "../../shared/models/table-options";
import { TableCellConfig } from "../../shared/models/table-config";

@Component({
  selector: "kmr-cell",
  templateUrl: "./cell.component.html",
  styleUrls: ["./cell.component.scss"]
})
export class CellComponent implements OnInit {
  @Input() tableOptions: TableOptions;
  @Input() tableConfig: TableCellConfig[];
  @Input() rowIndex: number = -1;
  @Input() row = {};

  @Output() operationHappend = new EventEmitter();
  @Output() rowSelected = new EventEmitter();
  @Output() dataChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  getModel(row, index: number) {
    let object = {};
    object[this.tableConfig[index].fieldName] =
      row[this.tableConfig[index].fieldName];
    return object;
  }

  getFields(row, index) {
    if (this.tableConfig[index].dataType === undefined) {
      return [
        {
          key: this.tableConfig[index].fieldName,
          type: "input",
          templateOptions: {
            label: row[this.tableConfig[index].fieldName],
            required: true
          }
        }
      ];
    }
    return [this.tableConfig[index].dataType];
  }
}
