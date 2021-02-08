import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  MenuItem,
  TextField,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CheckBox from "@material-ui/core/Checkbox";

const TenderSubTable = () => {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box border={1} style={{ margin: "6rem", width: "90%" }}>
      <form
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontFamily: "monospace",
          fontSize: "1.5rem",
          flexDirection: "row",
        }}
      >
        <div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "1rem" }}
          >
            <label>TENDER NUMBER</label>
            <br />
            <TextField
              id="outlined-basic"
              label="Tender Number"
              variant="outlined"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "1rem" }}
          >
            <label>English Description</label>
            <br />
            <TextField
              id="outlined-textarea"
              multiline
              label="English Description"
              variant="outlined"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "1rem" }}
          >
            <label>Arabic Description</label>
            <br />
            <TextField
              id="outlined-textarea"
              multiline
              label="Arabic Description"
              variant="outlined"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "1rem" }}
          >
            <label>Main Contractor</label>
            <br />
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your Contractor"
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "1rem" }}
          >
            <FormControlLabel
              control={
                <CheckBox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  name="LocalTinder"
                  color="primary"
                />
              }
              label="is local tinder"
            />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <label>Client</label>
              <br />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your Client"
                variant="outlined"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <label>Award Data</label>
              <br />
              <TextField
                id="outlined-basic"
                label="Award Data"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <label>Country</label>
              <br />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your Country"
                variant="outlined"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <label>State</label>
              <br />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your State"
                variant="outlined"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <label>City</label>
              <br />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your City"
                variant="outlined"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "1rem" }}
          >
            <label>Arabic Note</label>
            <br />
            <TextField
              id="outlined-textarea"
              multiline
              label="Arabic Note"
              variant="outlined"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "1rem" }}
          >
            <label>English Note</label>
            <br />
            <TextField
              id="outlined-textarea"
              multiline
              label="English Note"
              variant="outlined"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",

                justifyContent: "space-between",
              }}
            >
              <Button variant="contained" color="primary">
                Add New Tender
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",

                justifyContent: "space-between",
              }}
            >
              <Button variant="contained" color="primary">
                Update Tender
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",

                justifyContent: "space-between",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
              >
                Delete Tinder
              </Button>
              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {"Delete Tinder"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Are you sure you want to delete this tender
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary">
                    Disagree
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </form>
    </Box>
  );
};

export default TenderSubTable;
