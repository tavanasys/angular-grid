import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import { DynamicTableService } from "../../shared/services/dynamic-table.service";

@Component({
  selector: "kmr-dynamic-cell",
  templateUrl: "./dynamic-cell.component.html",
  styleUrls: ["./dynamic-cell.component.scss"]
})
export class DynamicCellComponent implements OnInit {
  @Input() fields: FormlyFieldConfig[];
  @Input() model: any;
  @Input() rowIndex: number;
  @Output() dataChanged = new EventEmitter();

  form = new FormGroup({});
  options: FormlyFormOptions = {};
  editMode: boolean = false;
  currentFields: FormlyFieldConfig[];
  currentModel: any;

  constructor(private dynamicTableSrvc: DynamicTableService) {}

  ngOnInit() {
    this.currentFields = this.fields;
    this.currentModel = this.model;
    this.dynamicTableSrvc.addCellModel(this.model, this.rowIndex);
  }

  onSubmit() {
    this.editMode = false;
    this.dynamicTableSrvc.addCellModel(this.currentModel, this.rowIndex);
    this.dataChanged.emit({ changedCell: this.currentModel, rowIndex: this.rowIndex});
  }

  onEditMode() {
    this.editMode = true;
  }
}
