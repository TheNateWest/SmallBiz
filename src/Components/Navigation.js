import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <AppBar position="relative" sx={{ backgroundColor: "green" }}>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          SmallBizzz.com
        </Typography>
        <div className="nav-list" style={{ display: "flex" }}>
          <Link to="/" style={{ marginRight: 20 }}>
            Listings
          </Link>
            {props.user.userName?(
                <Link to="/login" style={{marginRight: 20}} onClick={() => props.removeUser()}>LogOut</Link>           
                 ):(
                
                <Link to="/login" style={{marginRight: 20}}>Login</Link>
            )}
          {props.user.userName && <Link to="/add-business">Add Business</Link>}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
