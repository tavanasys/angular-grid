import {
  Input,
  Component,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectionStrategy
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { TableCellConfig } from "../../shared/models/table-config";
import { TableOptions } from "../../shared/models/table-options";
import { DynamicTableService } from "../../shared/services/dynamic-table.service";

@Component({
  selector: "kmr-dynamic-table",
  templateUrl: "./dynamic-table.component.html",
  styleUrls: ["./dynamic-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableComponent implements OnInit {
  @Input() options: TableOptions;
  @Input() tableConfig: TableCellConfig[];
  @Input() data: any[];
  @Input() loading: boolean = false;

  @Output() dataChanged = new EventEmitter();
  @Output() rowSelected = new EventEmitter();
  @Output() operationHappend = new EventEmitter();
  @Output() pageChanged = new EventEmitter();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  tableData: MatTableDataSource<any>;
  tableOptions: TableOptions = {};

  private currentSlectedRow = {};

  constructor(private dynamicTableSrvc: DynamicTableService) {}

  ngOnInit() {
    this.dynamicTableSrvc.tableDataChanged = this.dataChanged;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]) {
      this.tableData = new MatTableDataSource(this.data);
      setTimeout(() => {
        this.tableData.paginator = this.paginator;
      }, 0);
    }
    if (changes["options"]) {
      this.init();
      this.setOptions();
    }
  }

  init() {
    this.tableOptions = {
      inlineEdit: false,
      pagination: false,
      hasLoading: false,
      hasFilter: false,
      singleSelect: false,
      pageSize: 10,
      pageSizeOptions: [5, 10, 25, 50, 100]
    };
  }

  setOptions() {
    if (this.options) {
      Object.keys(this.options).forEach(optionName => {
        if (this.tableOptions[optionName] != undefined) {
          this.tableOptions[optionName] = this.options[optionName];
        }
      });
    }
  }

  isRowSelected(row) {
    let rowClasses = {};
    if (this.options != undefined && this.options.singleSelect === true) {
      rowClasses["table-row-hover"] = true;
      if (row == this.currentSlectedRow) {
        rowClasses["selected"] = true;
      }
    }
    return rowClasses;
  }

  onRowSelect(row) {
    this.currentSlectedRow = row;
    this.rowSelected.emit(this.currentSlectedRow);
  }

  onDataChanged($event, row) {
    $event["row"] = row;
    this.dataChanged.emit($event);
  }

  get headers(): string[] {
    let headers = [];
    if (this.tableConfig) {
      this.tableConfig.forEach(element => {
        headers.push(element.headerTitle);
      });
    }
    return headers;
  }

  applyFilter(filterValue: string) {
    this.tableData.filter = filterValue.trim().toLowerCase();
  }
}
