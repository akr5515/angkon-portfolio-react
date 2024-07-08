"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/styles");
var react_1 = require("react");
var navbar_ui_1 = __importDefault(require("../core-ui/navbar/navbar-ui"));
var theme_context_1 = require("../../contexts/theme-context");
var Navbar = function () {
    var _a = (0, react_1.useContext)(theme_context_1.ThemeContext), theme = _a.theme, setHandleDrawer = _a.setHandleDrawer, changeTheme = _a.changeTheme, isDark = _a.isDark;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var handleDrawerOpen = function () {
        setOpen(true);
        setHandleDrawer();
    };
    var handleDrawerClose = function () {
        setOpen(false);
        setHandleDrawer();
    };
    var useStyles = (0, styles_1.makeStyles)(function (t) { return ({
        navMenu: {
            fontSize: "2.5rem",
            color: theme.tertiary,
            cursor: "pointer",
            transform: "translateY(-10px)",
            transition: "color 0.3s",
            "&:hover": {
                color: theme.primary,
            },
        },
        MuiDrawer: {
            padding: "0em 1.8em",
            width: "14em",
            fontFamily: " var(--primaryFont)",
            fontStyle: " normal",
            fontWeight: " normal",
            fontSize: " 24px",
            background: theme.secondary,
            overflow: "hidden",
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
        },
        closebtnIcon: {
            fontSize: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
            color: theme.primary,
            position: "absolute",
            right: 40,
            top: 40,
            transition: "color 0.2s",
            "&:hover": {
                color: theme.tertiary,
            },
        },
        drawerItem: {
            margin: "2rem auto",
            borderRadius: "78.8418px",
            background: theme.secondary,
            color: theme.primary,
            width: "85%",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: "0 30px",
            boxSizing: "border-box",
            border: "2px solid",
            borderColor: theme.primary,
            transition: "background-color 0.2s, color 0.2s",
            "&:hover": {
                background: theme.primary,
                color: theme.secondary,
            },
        },
        drawerLinks: {
            fontFamily: "var(--primaryFont)",
            width: "50%",
            fontSize: "1.3rem",
            fontWeight: 600,
        },
        drawerIcon: {
            fontSize: "1.6rem",
        },
    }); });
    var classes = useStyles();
    var shortname = function (name) {
        if (name.length > 12) {
            return name.split(" ")[0];
        }
        else {
            return name;
        }
    };
    return ((0, jsx_runtime_1.jsx)(navbar_ui_1.default, { theme: theme, shortname: shortname, classes: classes, handleDrawerOpen: handleDrawerOpen, handleDrawerClose: handleDrawerClose, open: open, changeTheme: changeTheme, isDark: isDark }));
};
exports.default = Navbar;
