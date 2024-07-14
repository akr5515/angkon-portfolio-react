"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/styles");
var react_1 = require("react");
var bs_1 = require("react-icons/bs");
var theme_context_1 = require("../../../contexts/theme-context");
require("./change-theme.css");
var ChangeTheme = function () {
    var _a = (0, react_1.useContext)(theme_context_1.ThemeContext), theme = _a.theme, changeTheme = _a.changeTheme, isDark = _a.isDark;
    var useStyles = (0, styles_1.makeStyles)(function () { return ({
        icon: {
            fontSize: '1.5rem',
            color: theme.buttonColor,
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.tertiary,
            },
        },
    }); });
    var classes = useStyles();
    return ((0, jsx_runtime_1.jsx)("div", { className: 'changeTheme', children: (0, jsx_runtime_1.jsx)("button", { onClick: changeTheme, "aria-label": 'Back to top', children: isDark ?
                (0, jsx_runtime_1.jsx)(bs_1.BsFillSunFill, { className: classes.icon })
                :
                    (0, jsx_runtime_1.jsx)(bs_1.BsFillMoonFill, { className: classes.icon }) }) }));
};
exports.default = ChangeTheme;
