import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "kmr-row-selection",
  template: `
    <mat-checkbox (change)="onChange($event)"></mat-checkbox>
  `
})
export class RowSelectionComponent {
  @Input() index: number;
  @Output() rowSelected = new EventEmitter();

  onChange($event) {
    this.rowSelected.emit({
      checked: $event.checked,
      row: this.index
    });
  }
}
