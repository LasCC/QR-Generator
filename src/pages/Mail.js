import React, { useState } from "react";
import { Grid, TextField, Typography, Box, Button } from "@material-ui/core";
import Navbar from "../components/Navbar";
import makePDF from "../components/makePdf";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

export default props => {
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [values, setValues] = useState({
    email: "",
    subject: "",
    body: ""
  });
  const url_qr_code = `https://qrcode.tec-it.com/API/QRCode?data=mailto:${
    values.email
  }?subject=${values.subject}&body=${values.body}&backcolor=#ffffff`;
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
              <TextField
                variant="outlined"
                label="Email address"
                onChange={handleChange("email")}
                placeholder="example@mail.com"
                fullWidth
              />
              <TextField
                style={{ marginTop: 15 }}
                variant="outlined"
                label="Subject"
                onChange={handleChange("subject")}
                placeholder="Hello from QR code !"
                fullWidth
              />
              <TextField
                style={{ marginTop: 15 }}
                variant="outlined"
                multiline
                rows="4"
                label="Content"
                onChange={handleChange("body")}
                placeholder="Say something.."
                fullWidth
                helperText="Scan the QR code on your right to send the mail to your correspodent"
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
                Your mail QR code
                <br />
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
                  To send a mail with your <strong>iPhone</strong> or your{" "}
                  <strong>Tablet</strong>, <br />
                  please take a picture of the <strong>QR code</strong> and a{" "}
                  <strong>pop-up</strong> will show up. <br />
                  You just need to <strong>click the pop-up</strong> and there
                  you go !{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
