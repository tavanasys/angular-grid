  html:
    <kmr-dynamic-table
      [data]="transactionTableData"
      [tableConfig]="tableConfig"
      [options]="tableOptions"
    ></kmr-dynamic-table>
ts:
  import { TableOptions, TableCellConfig } from "angular-material-dynamic-table";

  tableConfig: TableCellConfig[] = [
    {
      headerTitle: "",
      fieldName: "Date"
    },
    {
      headerTitle: "",
      fieldName: "EnterTime"
    },
    {
      headerTitle: "" ,
      fieldName: "ExitTime"
    },
    {
      headerTitle: "",
      fieldName: "Status"
    },
    {
      headerTitle: "",
      fieldName: "operation",
      customComponent: "edit-delete"
    }
  ];

  tableOptions: TableOptions = {
    pagination: true,
    hasFilter: true
  };

  transactionTableData = [
    {
      Date: "1398/11/28",
      EnterTime: "09:09",
      ExitTime: "13:00",
      Status: ""
    },
    {
      Date: "1398/11/28",
      EnterTime: "13:50",
      ExitTime: "17:09",
      Status: ""
    }
  ];
