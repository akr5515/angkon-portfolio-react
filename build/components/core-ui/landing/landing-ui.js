"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_hash_link_1 = require("react-router-hash-link");
var react_typed_1 = require("react-typed");
var headerData_1 = require("../../../data/headerData");
require("./landing.css");
var fa_1 = require("react-icons/fa");
var contactsData_1 = require("../../../data/contactsData");
var angkon_jpg_1 = __importDefault(require("../../../assets/png/angkon.jpg"));
function LandingUI(_a) {
    var theme = _a.theme, drawerOpen = _a.drawerOpen, classes = _a.classes;
    return ((0, jsx_runtime_1.jsx)("div", { className: "landing", style: { backgroundColor: theme.quaternary }, children: (0, jsx_runtime_1.jsxs)("div", { className: "landing--container", children: [(0, jsx_runtime_1.jsx)("div", { className: "landing--container-left", style: { backgroundColor: theme.quaternary }, children: (0, jsx_runtime_1.jsxs)("div", { className: "lcl--content", children: [contactsData_1.contactsData.linkedIn && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.linkedIn, target: "_blank", rel: "noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaLinkedin, { className: "landing--social linkedin-icon", style: { color: theme.primary }, "aria-label": "LinkedIn" }) })), contactsData_1.contactsData.github && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.github, target: "_blank", rel: "noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaGithub, { className: "landing--social", style: { color: theme.primary }, "aria-label": "GitHub" }) })), contactsData_1.contactsData.twitter && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.twitter, target: "_blank", rel: "noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaTwitter, { className: "landing--social twitter-icon", style: { color: theme.primary }, "aria-label": "Twitter" }) })), contactsData_1.contactsData.facebook && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.facebook, target: "_blank", rel: "noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaFacebook, { className: "landing--social facebook-icon", style: { color: theme.primary }, "aria-label": "facebook" }) }))] }) }), (0, jsx_runtime_1.jsx)("img", { src: angkon_jpg_1.default, alt: "", className: "landing--img", style: {
                        opacity: "".concat(drawerOpen ? "0" : "1"),
                        borderColor: theme.primary,
                    } }), (0, jsx_runtime_1.jsx)("div", { className: "landing--container-right", style: { backgroundColor: theme.secondary }, children: (0, jsx_runtime_1.jsxs)("div", { className: "lcr--content", style: { color: theme.tertiary }, children: [(0, jsx_runtime_1.jsx)("h1", { children: headerData_1.headerData.name }), (0, jsx_runtime_1.jsx)(react_typed_1.ReactTyped, { strings: [
                                    "Frontend Developer",
                                    "Backend Developer",
                                    "Fullstack Developer",
                                ], typeSpeed: 40, backSpeed: 50, className: "typed-header", style: { color: theme.primary, fontSize: "20px" }, loop: true }), (0, jsx_runtime_1.jsx)("p", { children: headerData_1.headerData.desciption }), (0, jsx_runtime_1.jsxs)("div", { className: "lcr-buttonContainer", children: [headerData_1.headerData.resumePdf && ((0, jsx_runtime_1.jsx)("a", { href: headerData_1.headerData.resumePdf, download: "resume", target: "_blank", rel: "noreferrer", children: (0, jsx_runtime_1.jsx)("button", { className: classes.resumeBtn, children: "Download CV" }) })), (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { to: "/#contacts", smooth: true, children: (0, jsx_runtime_1.jsx)("button", { className: classes.contactBtn, children: "Contact" }) })] })] }) })] }) }));
}
exports.default = LandingUI;
