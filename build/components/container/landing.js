"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/styles");
var react_1 = require("react");
var theme_context_1 = require("../../contexts/theme-context");
var landing_ui_1 = __importDefault(require("../core-ui/landing/landing-ui"));
var Landing = function () {
    var _a = (0, react_1.useContext)(theme_context_1.ThemeContext), theme = _a.theme, drawerOpen = _a.drawerOpen;
    var useStyles = (0, styles_1.makeStyles)(function (t) { return ({
        resumeBtn: {
            color: theme.primary,
            backgroundColor: theme.secondary,
            borderRadius: "30px",
            textTransform: "inherit",
            textDecoration: "none",
            width: "150px",
            fontSize: "1rem",
            fontWeight: "500",
            height: "50px",
            fontFamily: "var(--primaryFont)",
            border: "3px solid ".concat(theme.primary),
            transition: "500ms ease-out",
            "&:hover": {
                backgroundColor: theme.buttonColor,
                color: theme.secondary,
                border: "3px solid ".concat(theme.buttonColor),
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: "30px",
            textTransform: "inherit",
            textDecoration: "none",
            width: "150px",
            height: "50px",
            fontSize: "1rem",
            fontWeight: "500",
            fontFamily: "var(--primaryFont)",
            border: "3px solid ".concat(theme.primary),
            transition: "500ms ease-out",
            "&:hover": {
                backgroundColor: theme.buttonColor,
                color: theme.secondary,
                border: "3px solid ".concat(theme.buttonColor),
            },
        },
    }); });
    var classes = useStyles();
    return (0, jsx_runtime_1.jsx)(landing_ui_1.default, { drawerOpen: drawerOpen, theme: theme, classes: classes });
    // return (
    //   <div>
    //     HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
    //   </div>
    // );
};
exports.default = Landing;
