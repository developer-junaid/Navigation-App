import React, { useCallback, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Drawer from "@material-ui/core/Drawer";
import "./components.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const NavBar = () => {
  // MY Code
  const [fullscreen, setFullScreen] = useState(false);

  const enterFullScreen = () => {
    setFullScreen(true);
    handle.enter();
  };

  const exitFullScreen = () => {
    setFullScreen(false);
    handle.exit();
  };

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handle = useFullScreenHandle();

  // MUI STYLES
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // Return
  return (
    <FullScreen handle={handle}>
      <div className={classes.grow}>
        {/* AppBar */}

        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={handleDrawer}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {fullscreen ? (
                <IconButton
                  aria-label="fullscreen"
                  onClick={() => exitFullScreen()}
                  color="inherit"
                >
                  <FullscreenExitIcon />
                </IconButton>
              ) : (
                  <IconButton
                    aria-label="fullscreen"
                    onClick={() => enterFullScreen()}
                    color="inherit"
                  >
                    <FullscreenIcon />
                  </IconButton>
                )}

              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <NotificationsIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <HelpOutlineIcon />
              </IconButton>
            </div>
            {/* Mobile section */}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        {renderMobileMenu}
        {renderMenu}
        {/* Drawer */}
        <Drawer anchor="left" open={open}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={handleDrawer}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={handleDrawer}
            aria-label="open drawer"
          >
            <RadioButtonCheckedIcon />
          </IconButton>
          <div className="drawer">
            <div className="drawer-list">
              <ul>
                <li><LocalAtmIcon /> Master Data</li>
                <li><MonetizationOnIcon /> Transaction</li>
                <li><AccountBalanceIcon /> Cash management</li>
                <li><EventAvailableIcon /> Settlement</li>
                <li><AccountBalanceWalletIcon /> Accounting</li>
                <li><ReceiptIcon /> Reporting</li>
                <li><SettingsIcon /> System Settings</li>

              </ul>
            </div>
            {/* <List>  

              <ListItem button>
                <ListItemIcon >
                  <InboxIcon htmlColor="white" />
                </ListItemIcon>
                <ListItemText primary="Master Data" />
              </ListItem>

              <ListItem button>
                <ListItemIcon >
                  <InboxIcon htmlColor="white" />
                </ListItemIcon>
                <ListItemText primary="Master Data" />
              </ListItem>

            </List> */}
          </div>
        </Drawer>
      </div>
    </FullScreen>
  );
};

export default NavBar;
