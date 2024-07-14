"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
var hi_1 = require("react-icons/hi");
var io5_1 = require("react-icons/io5");
var md_1 = require("react-icons/md");
var react_awesome_reveal_1 = __importDefault(require("react-awesome-reveal"));
var react_router_hash_link_1 = require("react-router-hash-link");
var headerData_1 = require("../../../data/headerData");
require("./navbar.css");
function NavbarUI(_a) {
    var theme = _a.theme, shortname = _a.shortname, classes = _a.classes, handleDrawerOpen = _a.handleDrawerOpen, handleDrawerClose = _a.handleDrawerClose, open = _a.open, changeTheme = _a.changeTheme, isDark = _a.isDark;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "navbar", children: [(0, jsx_runtime_1.jsxs)("div", { className: "navbar--container", children: [(0, jsx_runtime_1.jsx)("h1", { style: { color: theme.primary }, children: shortname(headerData_1.headerData.name) }), (0, jsx_runtime_1.jsx)(io5_1.IoMenuSharp, { className: classes.navMenu, onClick: handleDrawerOpen, "aria-label": "Menu" })] }), (0, jsx_runtime_1.jsxs)(material_1.Drawer, { variant: "temporary", onClose: function (event, reason) {
                    if (reason !== "backdropClick") {
                        handleDrawerClose();
                    }
                }, anchor: "left", open: open, classes: { paper: classes.MuiDrawer }, className: "drawer", disableScrollLock: true, children: [(0, jsx_runtime_1.jsx)("div", { className: "div-closebtn", children: (0, jsx_runtime_1.jsx)(io5_1.IoClose, { onClick: handleDrawerClose, onKeyDown: function (e) {
                                if (e.key === " " || e.key === "Enter") {
                                    e.preventDefault();
                                    handleDrawerClose();
                                }
                            }, className: classes.closebtnIcon, role: "button", tabIndex: 0, "aria-label": "Close" }) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { onClick: handleDrawerClose, children: (0, jsx_runtime_1.jsxs)("div", { className: "navLink--container", children: [(0, jsx_runtime_1.jsx)(react_awesome_reveal_1.default, { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { to: "/", smooth: true, children: (0, jsx_runtime_1.jsxs)("div", { className: classes.drawerItem, children: [(0, jsx_runtime_1.jsx)(io5_1.IoHomeSharp, { className: classes.drawerIcon }), (0, jsx_runtime_1.jsx)("span", { className: classes.drawerLinks, children: "Home" })] }) }) }), (0, jsx_runtime_1.jsx)(react_awesome_reveal_1.default, { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { to: "/#about", smooth: true, children: (0, jsx_runtime_1.jsxs)("div", { className: classes.drawerItem, children: [(0, jsx_runtime_1.jsx)(fa_1.FaUser, { className: classes.drawerIcon }), (0, jsx_runtime_1.jsx)("span", { className: classes.drawerLinks, children: "About" })] }) }) }), (0, jsx_runtime_1.jsx)(react_awesome_reveal_1.default, { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { to: "/#resume", smooth: true, children: (0, jsx_runtime_1.jsxs)("div", { className: classes.drawerItem, children: [(0, jsx_runtime_1.jsx)(hi_1.HiDocumentText, { className: classes.drawerIcon }), (0, jsx_runtime_1.jsx)("span", { className: classes.drawerLinks, children: "Resume" })] }) }) }), (0, jsx_runtime_1.jsx)(react_awesome_reveal_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: classes.drawerItem, onClick: changeTheme, children: [isDark ? ((0, jsx_runtime_1.jsx)(bs_1.BsFillSunFill, { className: classes.drawerIcon })) : ((0, jsx_runtime_1.jsx)(bs_1.BsFillMoonFill, { className: classes.drawerIcon })), (0, jsx_runtime_1.jsx)("span", { className: classes.drawerLinks, children: isDark ? "Light" : "Dark" })] }) }), (0, jsx_runtime_1.jsx)(react_awesome_reveal_1.default, { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { to: "/#contacts", smooth: true, children: (0, jsx_runtime_1.jsxs)("div", { className: classes.drawerItem, children: [(0, jsx_runtime_1.jsx)(md_1.MdPhone, { className: classes.drawerIcon }), (0, jsx_runtime_1.jsx)("span", { className: classes.drawerLinks, children: "Contact" })] }) }) })] }) })] })] }));
}
exports.default = NavbarUI;
