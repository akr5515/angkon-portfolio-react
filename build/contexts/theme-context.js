"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var theme_1 = require("../theme/theme");
exports.ThemeContext = (0, react_1.createContext)(undefined);
var ThemeContextProvider = function (_a) {
    var children = _a.children;
    // eslint-disable-next-line
    var _b = (0, react_1.useState)(theme_1.theLightTheme), theme = _b[0], setTheme = _b[1];
    var _c = (0, react_1.useState)(false), drawerOpen = _c[0], setDrawerOpen = _c[1];
    var _d = (0, react_1.useState)(false), isDark = _d[0], setDark = _d[1];
    var setHandleDrawer = function () {
        setDrawerOpen(!drawerOpen);
    };
    var changeTheme = function () {
        if (isDark) {
            setTheme(theme_1.theLightTheme);
            setDark(false);
        }
        else {
            setTheme(theme_1.theDarkTheme);
            setDark(true);
        }
    };
    var value = {
        theme: theme,
        drawerOpen: drawerOpen,
        setHandleDrawer: setHandleDrawer,
        changeTheme: changeTheme,
        isDark: isDark,
    };
    return ((0, jsx_runtime_1.jsx)(exports.ThemeContext.Provider, { value: value, children: children }));
};
exports.default = ThemeContextProvider;
