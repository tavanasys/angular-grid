import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { ContentLoaderModule } from "@netbasal/content-loader";

import { CustomRendererComponent } from "./components/custom-renderer/custom-renderer.component";
import { TableOperationComponent } from "./components/cell-components/table-operation/table-operation.component";
import { RowSelectionComponent } from "./components/cell-components/row-selection/row-selection.component";
import { ImageCellComponent } from "./components/cell-components/image-cell/image-cell.component";
import { DynamicTableComponent } from "./components/dynamic-table/dynamic-table.component";
import { DynamicCellComponent } from "./components/dynamic-cell/dynamic-cell.component";
import { CellComponent } from "./components/cell/cell.component";
import { NoDataComponent } from "./components/no-data/no-data.component";
import { IncreaseDecreaseComponent } from "./components/cell-components/increase-decrease/increase-decrease.component";
import { DynamicTableService } from './shared/services/dynamic-table.service';

@NgModule({
  declarations: [
    DynamicTableComponent,
    DynamicCellComponent,
    CustomRendererComponent,
    TableOperationComponent,
    RowSelectionComponent,
    ImageCellComponent,
    CellComponent,
    NoDataComponent,
    IncreaseDecreaseComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    ContentLoaderModule
  ],
  exports: [DynamicTableComponent],
  providers: [DynamicTableService]
})
export class DynamicTableModule {}
