"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/styles");
var react_1 = require("react");
var theme_context_1 = require("../../contexts/theme-context");
var projects_UI_1 = __importDefault(require("../core-ui/projects/projects-UI"));
var Projects = function () {
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    var useStyles = (0, styles_1.makeStyles)(function () { return ({
        viewAllBtn: {
            color: theme.secondary,
            backgroundColor: theme.buttonColor,
            transition: 'color 0.5s',
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.primary,
            }
        },
        viewArr: {
            color: theme.buttonColor,
            backgroundColor: theme.secondary,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.5s',
            "&:hover": {
                color: theme.buttonColor,
                backgroundColor: theme.secondary,
            }
        },
    }); });
    var classes = useStyles();
    return ((0, jsx_runtime_1.jsx)(projects_UI_1.default, { theme: theme, classes: classes }));
};
exports.default = Projects;
