import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./components.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ReceiptIcon from "@material-ui/icons/Receipt";
import './components.css';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const drawerWidth = 240;

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
        width: theme.spacing(7) + 1,
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
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
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

    // Drawer Logic
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawer = () => {
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
    return (
        <FullScreen handle={handle}>
            <div className={classes.grow}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
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
                        </div>
                    </Toolbar>
                </AppBar>
                {/* Drawer */}
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>

                        <IconButton onClick={handleDrawerClose}>
                            <RadioButtonCheckedIcon />
                        </IconButton>
                        <IconButton
                            backgroundColor="purple"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>

                        <ListItem button>
                            <ListItemIcon>
                                <LocalAtmIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Master Data'} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <MonetizationOnIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Transaction'} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Cash management'} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <EventAvailableIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Settlement'} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <AccountBalanceWalletIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Accounting'} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <ReceiptIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Reporting'} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary={'System Settings'} />
                        </ListItem>

                    </List>

                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                </main>
            </div>
        </FullScreen>
    );
}
