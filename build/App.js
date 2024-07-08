"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var theme_context_1 = require("./contexts/theme-context");
var home_1 = __importDefault(require("./pages/home"));
var scroll_to_top_1 = __importDefault(require("./components/helper/scroll-to-top"));
var back_to_top_1 = __importDefault(require("./components/helper/back-to-top/back-to-top"));
var change_theme_1 = __importDefault(require("./components/helper/change-theme/change-theme"));
function App() {
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    return ((0, jsx_runtime_1.jsxs)("div", { style: { backgroundColor: theme.secondary }, children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(scroll_to_top_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/", replace: true }) })] })] }), (0, jsx_runtime_1.jsx)(back_to_top_1.default, {}), (0, jsx_runtime_1.jsx)(change_theme_1.default, {})] }));
}
exports.default = App;
