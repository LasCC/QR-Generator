import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import makePDF from "../components/makePdf";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

export default props => {
  const [ssid, setSsid] = useState("");
  const [ssid_password, setSsidPassword] = useState("");
  const [security, setSecurity] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const url_qr_code = `https://qrcode.tec-it.com/API/QRCode?data=WIFI:T:${security};S:${ssid};P:${ssid_password};;&backcolor=#ffffff`;
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const handleChange = event => {
    setSecurity(event.target.value);
    console.log(url_qr_code);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={12} xl={6} md={6} sm={12}>
          <Box
            style={{ height: "100vh" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box style={{ padding: 25, width: "55%" }}>
              <Typography
                variant="h1"
                style={{ fontWeight: "bolder", fontSize: 55, marginBottom: 25 }}
              >
                Generate some <br />
                <strong className="text_image">great content.</strong>
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel ref={inputLabel} htmlFor="security-select">
                  Security
                </InputLabel>
                <Select
                  labelWidth={labelWidth}
                  fullWidth
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={security}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="WEP">WEP</MenuItem>
                  <MenuItem value="WPA">WPA / WPA2</MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{ marginTop: 15 }}
                variant="outlined"
                label="Name of the network"
                onChange={e => setSsid(e.target.value)}
                placeholder="Wifi - Salon"
                fullWidth
              />
              <TextField
                style={{ marginTop: 15 }}
                variant="outlined"
                label="Password"
                onChange={e => setSsidPassword(e.target.value)}
                placeholder="***********"
                fullWidth
                helperText="Scan the QR code on your right and you can successfully connect to your WI-FI !"
              />
              <Button
                variant="contained"
                fullWidth
                onClick={() => makePDF()}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginTop: 25,
                  marginBottom: 15,
                  fontWeight: "bold",
                  boxShadow: "none"
                }}
              >
                <PictureAsPdfIcon style={{ marginRight: 10 }} />
                Generate PDF
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} xl={6} md={6} sm={12} className="backgroundRight">
          <Box
            style={{ height: "100vh" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="borderBox"
          >
            <Box
              onClick={() => {
                function generateImage(url_qr_code) {
                  const win = window.open();
                  win.document.write(
                    '<img src="' +
                      url_qr_code +
                      '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:auto; height:auto;" allowfullscreen></img>'
                  );
                }
                generateImage(url_qr_code);
              }}
              id="makePdf"
              className="hoverCard"
              style={{ backgroundColor: "white", height: "auto", padding: 20 }}
            >
              <h1 style={{ fontWeight: "bolder", fontSize: 35 }}>
                Your Wi-Fi QR code <br />
                <strong
                  className="text_image"
                  style={{ backgroundPosition: "left" }}
                >
                  is ready.
                </strong>
              </h1>
              <Box align="center">
                <img src={url_qr_code} alt="qrcode" style={{ height: 180 }} />
              </Box>
              <Box style={{ marginTop: 10, marginBottom: 25 }}>
                <Typography
                  variant="subtitle1"
                  style={{ marginTop: 10, fontSize: 15 }}
                  color="textSecondary"
                >
                  To connect your Wi-Fi with your <strong>iPhone</strong> or
                  your <strong>Tablet</strong>, <br />
                  please take a picture of the <strong>QR code</strong> and a{" "}
                  <strong>pop-up</strong> will show up. <br />
                  You just need to <strong>click the pop-up</strong> and there
                  you go !{" "}
                </Typography>
                <h1 style={{ marginTop: 15, fontSize: 15 }}>
                  Your network : <br />
                  <strong className="text_image">{ssid}</strong>
                </h1>
                <h1 style={{ marginTop: 15, fontSize: 15 }}>
                  Password of the network : <br />
                  <strong className="text_image">{ssid_password}</strong>
                </h1>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
