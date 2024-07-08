"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/styles");
var react_1 = require("react");
var io_1 = require("react-icons/io");
var theme_context_1 = require("../../../contexts/theme-context");
require("./back-to-top.css");
function BackToTop() {
    var _a = (0, react_1.useState)(false), visible = _a[0], setVisible = _a[1];
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    var toggleVisible = function () {
        var scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        }
        else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    window.addEventListener('scroll', toggleVisible);
    var useStyles = (0, styles_1.makeStyles)(function () { return ({
        icon: {
            fontSize: '2rem',
            color: theme.primary,
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.tertiary,
            },
        },
    }); });
    var classes = useStyles();
    return ((0, jsx_runtime_1.jsx)("div", { style: { display: visible ? 'inline' : 'none' }, className: 'backToTop', children: (0, jsx_runtime_1.jsx)("button", { onClick: scrollToTop, "aria-label": 'Back to top', children: (0, jsx_runtime_1.jsx)(io_1.IoIosArrowDropupCircle, { className: classes.icon }) }) }));
}
exports.default = BackToTop;
