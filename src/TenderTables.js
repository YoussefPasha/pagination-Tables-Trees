import React, { forwardRef, useState } from "react";
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
import { Box } from "@material-ui/core";
import TenderRevisions from "./TenderRevisions";
import { SplitText } from "@cyriacbr/react-split-text";

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

export default function MultipleDetailPanels() {
  const [data, setData] = useState([
    {
      tenderNo: "0",
      eng_desc:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
      ar_desc:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
      main_contractor: "0",
      client: "0",
      country: "1",
      state: "1",
      city: "1",
      eng_note:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
      ar_note:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
    },
    {
      tenderNo: "1",
      eng_desc:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
      ar_desc:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
      main_contractor: "1",
      client: "1",
      country: "0",
      state: "1",
      city: "1",
      eng_note:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
      ar_note:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
    },
    {
      tenderNo: "2",
      eng_desc:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
      ar_desc:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
      main_contractor: "0",
      client: "0",
      country: "0",
      state: "0",
      city: "1",
      eng_note:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
      ar_note:
        "We all have our own techniques, but one of the most effective techniques is to actually ",
    },
  ]);
  return (
    <MaterialTable
      icons={tableIcons}
      style={{
        fontFamily: "monospace",
        fontSize: "1.2rem",
      }}
      title="Tenders"
      columns={[
        {
          title: "Tender-Num",
          field: "tenderNo",
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
        {
          title: "English Description",
          field: "eng_desc",
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
        {
          title: "Client",
          field: "client",
          lookup: { 0: "CC", 1: "BB" },
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
        {
          title: "Arabic Description",
          field: "ar_desc",
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
        {
          title: "Main Contractor",
          field: "main_contractor",
          lookup: { 0: "MM", 1: "NN" },
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
        {
          title: "Country",
          field: "country",
          lookup: { 0: "MM", 1: "NN" },
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
        {
          title: "State",
          field: "state",
          lookup: { 0: "MM", 1: "NN" },
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
        {
          title: "City",
          field: "city",
          lookup: { 0: "MM", 1: "NN" },
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
        {
          title: "English Note",
          field: "eng_note",
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
        {
          title: "Arabic Note",
          field: "ar_note",
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
          align: "center",
        },
      ]}
      data={data}
      options={{
        tableLayout: "fixed",
        doubleHorizontalScroll: true,
      }}
      detailPanel={[
        {
          tooltip: "Show Data",
          render: (rowData) => {
            return (
              <div
                style={{
                  fontSize: "1.3rem",
                  textAlign: "center",
                  fontFamily: "monospace",
                  margin: "3rem",
                }}
              >
                <div style={{ margin: "2rem" }}>
                  <Box border={3} borderColor="#8BC34A" borderRadius={6}>
                    <TenderRevisions />
                  </Box>
                </div>
              </div>
            );
          },
        },
      ]}
    />
  );
}
