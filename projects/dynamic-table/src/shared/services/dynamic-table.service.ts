import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class DynamicTableService {
  private _tableModel: any[] = [];
  private tableDataChanged$: EventEmitter<any>;
  // private tableRowSelected$: EventEmitter<any>;
  // private tableOperationHappend$: EventEmitter<any>;

  public get tableModel(): any[] {
    return this._tableModel;
  }

  public set tableModel(v: any[]) {
    this._tableModel = v;
  }

  public set tableDataChanged(v: EventEmitter<any>) {
    this.tableDataChanged$ = v;
  }

  // public set tableRowSelected(v: EventEmitter<any>) {
  //   this.tableRowSelected$ = v;
  // }

  // public set tableOperationHappend(v: EventEmitter<any>) {
  //   this.tableOperationHappend$ = v;
  // }

  // emitSelectedRow(selectedRow: { index: number; checked: boolean }) {
  //   this.tableRowSelected$.emit(selectedRow);
  // }

  // emitOperation(selectedRow: any, operation) {
  //   this.tableOperationHappend$.emit({
  //     row: selectedRow,
  //     operation
  //   });
  // }

  addCellModel(cellModel: object, rowIndex: number) {
    if (cellModel) {
      const cellModelKey = Object.keys(cellModel)[0];
      if (this.tableModel[rowIndex]) {
        this._tableModel[rowIndex][cellModelKey] = cellModel[cellModelKey];
      } else {
        this._tableModel[rowIndex] = cellModel;
      }
      // this.tableDataChanged$.emit(this._tableModel);
    }
  }
}
