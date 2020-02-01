import React, { useState } from "react";
import { Grid, TextField, Typography, Box, Button } from "@material-ui/core";
import Navbar from "../components/Navbar";
import makePDF from "../components/makePdf";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import MuiPhoneNumber from "material-ui-phone-number";

export default props => {
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleChangeNumber = name => event => {
    setValues({ ...values, [name]: event });
  };
  const [values, setValues] = useState({
    phone_number: "",
    message: ""
  });
  const url_qr_code = `https://qrcode.tec-it.com/API/QRCode?data=tel:${
    values.phone_number
  }&backcolor=#ffffff`;
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
                Call someone <br />
                <strong className="text_image">with a picture.</strong>
              </Typography>
              <MuiPhoneNumber
                defaultCountry={"us"}
                fullWidth
                margin="normal"
                variant="outlined"
                value={values.phone_number}
                onChange={handleChangeNumber("phone_number")}
                helperText="Scan the QR code on your right to call your correspondent"
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
                Your QR code <br />
                <strong
                  className="text_image"
                  style={{ backgroundPosition: "left" }}
                >
                  is to rock !
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
                  To call someone, please <strong>scan the QR</strong> <br />
                  on your right and a <strong>popup will appear.</strong>
                  <br />
                  You just click on it and you can talk to {""}
                  <strong>your correspondent.</strong>
                </Typography>
                <h1 style={{ marginTop: 15, fontSize: 15 }}>
                  Phone number : <br />
                  <strong className="text_image">{values.phone_number}</strong>
                </h1>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
