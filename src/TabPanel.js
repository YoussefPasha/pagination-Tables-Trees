import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TenderRevisions from "./TenderRevisions";
import ManagementRoles from "./ManagementRoles";
import Consultants from "./Consultants";
import Divisions from "./Divisions";
import SubContractors from "./SubContractors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className={classes.root}
      style={{ width: "70%", justifyContent: "center" }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Revisions" {...a11yProps(0)} />
          <Tab label="Managment Roles" {...a11yProps(1)} />
          <Tab label="Consultants" {...a11yProps(2)} />
          <Tab label="Divisions" {...a11yProps(3)} />
          <Tab label="Sub Contractors" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TenderRevisions />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ManagementRoles />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Consultants />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Divisions />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SubContractors />
      </TabPanel>
    </div>
  );
}
