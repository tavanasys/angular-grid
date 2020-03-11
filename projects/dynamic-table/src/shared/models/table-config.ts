import { CustomComponentType } from "./types";
import { FormlyFieldConfig } from "@ngx-formly/core";

export class TableCellConfig {
  headerTitle: string;
  fieldName: string;
  inlineEdit?: boolean;
  minWidth?: string;
  dataType?: FormlyFieldConfig;
  customComponent?: CustomComponentType;
}
