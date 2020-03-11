import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { TableOperationType, ActionType } from "../../../shared/models/types";

@Component({
  selector: "kmr-table-operation",
  templateUrl: "./table-operation.component.html",
  styleUrls: ["./table-operation.component.scss"]
})
export class TableOperationComponent implements OnChanges {
  @Input() row: number;
  @Input() type: TableOperationType;
  @Output() operationHappend = new EventEmitter();

  deleteFlag = false;
  editFlag = false;
  infoFlag = false;

  ngOnChanges() {
    this.getOperationType();
  }

  onAction(action: ActionType) {
    
    this.operationHappend.emit({ row: this.row, action });
  }

  getOperationType() {
    switch (this.type) {
      case "delete":
        this.deleteFlag = true;
        break;
      case "edit":
        this.editFlag = true;
        break;
      case "info":
        this.infoFlag = true;
        break;
      case "edit-delete":
        this.deleteFlag = true;
        this.editFlag = true;
        break;
      case "edit-delete-info":
        this.deleteFlag = true;
        this.editFlag = true;
        this.infoFlag = true;
        break;
    }
  }
}
