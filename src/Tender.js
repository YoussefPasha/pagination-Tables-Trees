import { Box } from "@material-ui/core";
import React from "react";
import TenderTable from "./TenderTables";

const Tender = () => {
  return (
    <Box border={1} style={{ margin: "2rem" }}>
      <TenderTable />
    </Box>
  );
};

export default Tender;
