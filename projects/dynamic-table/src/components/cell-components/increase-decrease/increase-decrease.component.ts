import { Component, Input, Output, EventEmitter } from "@angular/core";
// import { AlertService } from "app/core/modules/alert/shared/services/alert.service";

@Component({
  selector: "kmr-increase-decrease",
  templateUrl: "./increase-decrease.component.html",
  styleUrls: ["./increase-decrease.component.scss"]
})
export class IncreaseDecreaseComponent {
  @Input() product: Product;
  @Output() operationHappened = new EventEmitter();

  // constructor(private alertSrvc: AlertService) {}

  onInputChange(itemCount: number) {
    if (itemCount > 1) {
      // this.product.count = itemCount;
      this.emitData(itemCount);
    } else {
      // this.alertSrvc.showSnackbar("مقدار نمی تواند منفی باشد", "DANGER");
    }
  }

  onIncreaseValue(itemCount: number) {
    if (itemCount > 0) {
      ++itemCount;
      // this.product.count = ++itemCount;
    } else {
      itemCount = 1;
    }
    this.emitData(itemCount);
  }

  onDecreaseValue(itemCount: number) {
    if (itemCount > 1) {
      // this.product.count = --itemCount;
      this.emitData(--itemCount);
    }
  }

  emitData(count: number) {
    this.operationHappened.emit({
      action: "count-change",
      row: this.product.row,
      count
    });
  }
}

interface Product {
  count: number;
  row: any;
}
