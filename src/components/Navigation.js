import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles, fade } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import { Menu } from "antd";
import { pinContext } from "./Context";
import IconButton from "@material-ui/core/IconButton";
import MyMenu from "./Menu";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./components.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import "./components.css";
import Popover from "@material-ui/core/Popover";

const drawerWidth = 301;
const IconDrawerWidth = 70;
const { SubMenu } = Menu;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  IconBarShift: {
    marginLeft: IconDrawerWidth,
    width: `calc(100% - ${IconDrawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
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
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(9) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Navigation() {
  const classes = useStyles();

  // MY CODE

  // Full screen logic
  const [fullscreen, setFullScreen] = useState(false);
  const handle = useFullScreenHandle();

  const enterFullScreen = () => {
    setFullScreen(true);
    handle.enter();
  };

  const exitFullScreen = () => {
    setFullScreen(false);
    handle.exit();
  };

  // Popper Logic
  const [openPopper, setPopper] = useState(false);

  // Drawer Logic
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [shiftBar, setShiftBar] = useState(false);

  // Use Pincontext
  const { pin, setPin } = useContext(pinContext);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
    setShiftBar(!shiftBar);
    setPin(false);
    {
      openDrawer ? setOpen(true) : setOpen(false);
    }
  };

  const handleDrawerPin = () => {
    setPin(!pin);
    setOpen(!open);
  };

  // MUI CODE
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

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <FullScreen handle={handle}>
      <div className="container">
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: shiftBar,
            [classes.IconBarShift]: pin,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: shiftBar,
              })}
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
              <div className="floatRight">
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

                {/* Accounts profile menu */}
                <IconButton
                  onClick={() => {
                    setPopper(true);
                  }}
                  aria-label="Account info"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Popover
                  open={openPopper}
                  classes={"popper-box"}
                  onClose={() => setPopper(false)}
                  anchorReference="anchorPosition"
                  anchorPosition={{ top: 70, left: 1500 }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <div className="account-popper">
                    <h4>User Settings</h4>
                    <br />
                    <h4>Logout</h4>
                  </div>
                </Popover>

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
            </div>
          </Toolbar>
        </AppBar>

        {openDrawer ? (
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: !open,
              [classes.drawerClose]: open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: !open,
                [classes.drawerClose]: open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerPin} className="pin-btn">
                <RadioButtonCheckedIcon />
              </IconButton>{" "}
              <IconButton
                className="drawer-btn"
                backgroundColor="purple"
                edge="start"
                color="inherit"
                onClick={handleDrawer}
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className="Links">
              <Divider />
              <MyMenu />
            </div>
          </Drawer>
        ) : (
          <span></span>
        )}
      </div>
    </FullScreen>
  );
}
