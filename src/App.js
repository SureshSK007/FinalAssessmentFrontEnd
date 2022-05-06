import React from "react";
import routing from "./routing";
import "./App.css";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

function App() {
  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              style={{
                marginRight: 20,
              }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,
              }}
            >
              <h5 align="center">Resume Builder</h5>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        </div>
      <div>
        {routing}
      </div>
    </div>
  );
}

export default App;
