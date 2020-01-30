import React from "react";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default props => {
  return (
    <>
      <Box
        style={{ height: "100vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <img
            src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5db1e0e7e74e34610bcb4951_sprinting.gif"
            alt="404image"
          />
        </Box>
        <Box>
          <h1>
            404, something went <strong className="text_image">wrong..</strong>
          </h1>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "black",
                color: "white",
                marginTop: 25,
                marginBottom: 15,
                fontWeight: "bolder",
                boxShadow: "none",
                textTransform: "none"
              }}
            >
              Take me back please.
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
