import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider
} from "@material-ui/core";
import SmsIcon from "@material-ui/icons/Sms";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import DraftsIcon from "@material-ui/icons/Drafts";
import MenuIcon from "@material-ui/icons/Menu";
import HttpIcon from "@material-ui/icons/Http";
import { Link } from "react-router-dom";
import WifiIcon from "@material-ui/icons/Wifi";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItem alignItems="flex-start">
          <img
            src="https://i.imgur.com/sCugwOH.png"
            alt="logo"
            style={{ width: 155 }}
          />
        </ListItem>
        <Divider />

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText primary="Wi-Fi" />
          </ListItem>
        </Link>

        <Link to="/url" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <HttpIcon />
            </ListItemIcon>
            <ListItemText primary="URL" />
          </ListItem>
        </Link>

        <Link to="/phone" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Phone Call" />
          </ListItem>
        </Link>

        <Link to="/sms" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <SmsIcon />
            </ListItemIcon>
            <ListItemText primary="SMS" />
          </ListItem>
        </Link>

        <Link to="/mail" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItem>
        </Link>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/LasCC"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
        </a>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer("right", true)}
        style={{ backgroundColor: "white", fontWeight: "bold" }}
      >
        <MenuIcon style={{ color: "black" }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
