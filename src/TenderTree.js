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
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Box } from "@material-ui/core";
import TendersTreeTable from "./TendersTreeTable";

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

function TenderTree() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "a",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 63,
      sex: "Male",
      type: "adult",
    },
    {
      id: 2,
      name: "b",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 34,
      sex: "Female",
      type: "adult",
      parentId: 1,
    },
    {
      id: 3,
      name: "c",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 34,
      sex: "Female",
      type: "child",
      parentId: 1,
    },
    {
      id: 4,
      name: "d",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 34,
      sex: "Female",
      type: "child",
      parentId: 3,
    },
    {
      id: 5,
      name: "e",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 34,
      sex: "Female",
      type: "child",
      parentId: 1,
    },
    {
      id: 6,
      name: "f",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 34,
      sex: "Female",
      type: "child",
      parentId: 5,
    },
    {
      id: 7,
      name: "e",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 34,
      sex: "Female",
      type: "child",
      parentId: 6,
    },
    {
      id: 8,
      name: "e",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 34,
      sex: "Female",
      type: "child",
      parentId: 7,
    },
  ]);
  return (
    <MaterialTable
      style={{
        fontFamily: "monospace",
        fontSize: "1.2rem",
      }}
      data={data}
      icons={tableIcons}
      title="Boq Tree"
      columns={[
        {
          title: "Adı",
          field: "name",
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
        },
        {
          title: "Soyadı",
          field: "surname",
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
        },
        {
          title: "Cinsiyet",
          field: "sex",
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
        },
        {
          title: "Tipi",
          field: "type",
          removable: false,
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
        },
        {
          title: "Doğum Yılı",
          field: "birthYear",
          type: "numeric",
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
        },
        {
          title: "Doğum Yeri",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          headerStyle: {
            fontFamily: "system-ui",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#0288D1",
          },
        },
      ]}
      parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
      detailPanel={[
        {
          icon: VisibilityIcon,
          openIcon: VisibilityOffIcon,
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
                    <TendersTreeTable />
                  </Box>
                </div>
              </div>
            );
          },
        },
      ]}
      options={{
        tableLayout: "auto",
        doubleHorizontalScroll: true,
      }}
    />
  );
}

export default TenderTree;
