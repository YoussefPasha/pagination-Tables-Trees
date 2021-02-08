import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import TenderSubTable from "./TenderSubTable";
import { Box } from "@material-ui/core";
import TenderRevisions from "./TenderRevisions";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function SelectedRowStyling() {
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
  const [extendedData, setExtendedData] = useState([
    {
      tenderNo: "0",
      eng_desc: "dadsadssdadasasdasdasdsad",
      ar_desc: "dasdasadssadsaddsadsa",
      main_contractor: "dsadasdsa",
      client: "sdadsa",
      country: "sadassad",
      state: "dasads",
      city: "sadsadsa",
      eng_note: "dsadas",
      ar_note: "dsadsadsadsa",
      revisions: [
        {
          rev_no: "0",
          subData: "dsadsa",
          issueDate: "dsadas",
          status: 0,
          eng_desc: "asddsadsasa",
          ar_desc: "dasdsadsa",
          eng_note: "sadsadsa",
          ar_note: "dsadsa",
        },
        {
          rev_no: "1",
          subData: "111dsadsa",
          issueDate: "111dsadas",
          status: 1,
          eng_desc: "111asddsadsasa",
          ar_desc: "11dasdsadsa",
          eng_note: "111sadsadsa",
          ar_note: "111dsadsa",
        },
      ],
    },
    {
      tenderNo: "1",
      eng_desc: "1dadsadssdadasasdasdasdsad",
      ar_desc: "1dasdasadssadsaddsadsa",
      main_contractor: "1dsadasdsa",
      client: "1sdadsa",
      country: "1sadassad",
      state: "1dasads",
      city: "1sadsadsa",
      eng_note: "1dsadas",
      ar_note: "dsadsadsadsa",
      revisions: [
        {
          rev_no: "0",
          subData: "dsadsa",
          issueDate: "dsadas",
          status: "Good",
          eng_desc: "asddsadsasa",
          ar_desc: "dasdsadsa",
          eng_note: "sadsadsa",
          ar_note: "dsadsa",
        },
        {
          rev_no: "1",
          subData: "111dsadsa",
          issueDate: "111dsadas",
          status: "111dasdsa",
          eng_desc: "111asddsadsasa",
          ar_desc: "11dasdsadsa",
          eng_note: "111sadsadsa",
          ar_note: "111dsadsa",
        },
      ],
    },
    {
      tenderNo: "2",
      eng_desc: "2dadsadssdadasasdasdasdsad",
      ar_desc: "2dasdasadssadsaddsadsa",
      main_contractor: "2dsadasdsa",
      client: "2sdadsa",
      country: "2sadassad",
      state: "2dasads",
      city: "2sadsadsa",
      eng_note: "2dsadas",
      ar_note: "2dsadsadsadsa",
      revisions: [
        {
          rev_no: "0",
          subData: "dsadsa",
          issueDate: "dsadas",
          status: "dasdsa",
          eng_desc: "asddsadsasa",
          ar_desc: "dasdsadsa",
          eng_note: "sadsadsa",
          ar_note: "dsadsa",
        },
        {
          rev_no: "1",
          subData: "111dsadsa",
          issueDate: "111dsadas",
          status: "111dasdsa",
          eng_desc: "111asddsadsasa",
          ar_desc: "11dasdsadsa",
          eng_note: "111sadsadsa",
          ar_note: "111dsadsa",
        },
      ],
    },
  ]);

  return (
    <Box border={1} style={{ margin: "6rem", width: "90%" }}>
      <MaterialTable
        style={{
          fontFamily: "monospace",
          fontSize: "2rem",
          marginBottom: "6rem",
        }}
        icons={tableIcons}
        title="Selected Row Styling Preview"
        columns={[
          { title: "TENDER No", field: "tenderNo" },
          { title: "English Description", field: "eng_desc" },
          { title: "Client", field: "client" },
        ]}
        data={extendedData}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#536DFE" : "#FFF",
          }),
        }}
      />
      <TenderSubTable />
      <TenderRevisions data={extendedData[0].revisions} />
    </Box>
  );
}
