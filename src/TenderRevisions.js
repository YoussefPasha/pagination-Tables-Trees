import React, { forwardRef, useState } from "react";
import { Box, Button } from "@material-ui/core";
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
import ImageUploader from "react-images-upload";

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

export default function TenderRevisions(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: "Revision Num", field: "rev_no" },
    {
      title: "Submission Date",
      field: "subData",
      type: "Date",
    },
    { title: "Issue Date", field: "issueDate", type: "Date" },
    {
      title: "Status",
      field: "status",
      lookup: { 0: "Good", 1: "Bad" },
    },
    {
      title: "English Desc",
      field: "eng_desc",
    },
    {
      title: "Arabic Desc",
      field: "ar_desc",
    },
    {
      title: "Arabic Note",
      field: "ar_note",
    },
    {
      title: "English Note",
      field: "ar_note",
    },
    {
      title: "Avatar",
      field: "imageUrl",
      render: (rowData) => (
        <Button autoFocus color="primary"   >
          Transfer for Projects
        </Button>
      ),
    },
  ]);

  return (
    <Box border={1} style={{ margin: "6rem", width: "90%" }}>
      <MaterialTable
        icons={tableIcons}
        style={{
          fontFamily: "monospace",
          fontSize: "1.2rem",
        }}
        title="Editable Preview"
        columns={columns}
        data={props.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                props.setData([...props.data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...props.data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                props.setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...props.data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                props.setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </Box>
  );
}
