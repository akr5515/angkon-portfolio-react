"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var coding_json_1 = __importDefault(require("../../../assets/lottie/coding.json"));
var theme_context_1 = require("../../../contexts/theme-context");
var aboutData_1 = require("../../../data/aboutData");
var animation_lottie_1 = __importDefault(require("../../helper/animation-lottie"));
require("./about.css");
function About() {
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    return ((0, jsx_runtime_1.jsx)("div", { style: { backgroundColor: theme.secondary }, children: (0, jsx_runtime_1.jsxs)(material_1.Container, { className: "about", id: "about", children: [(0, jsx_runtime_1.jsxs)("div", { className: "line-styling", children: [(0, jsx_runtime_1.jsx)("div", { className: "style-circle", style: { backgroundColor: theme.primary } }), (0, jsx_runtime_1.jsx)("div", { className: "style-circle", style: { backgroundColor: theme.primary } }), (0, jsx_runtime_1.jsx)("div", { className: "style-line", style: { backgroundColor: theme.primary } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "about-body", children: [(0, jsx_runtime_1.jsxs)("div", { className: "about-description", children: [(0, jsx_runtime_1.jsx)("h2", { style: { color: theme.primary }, children: aboutData_1.aboutData.title }), (0, jsx_runtime_1.jsxs)("p", { style: { color: theme.tertiary }, children: [aboutData_1.aboutData.description1, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), aboutData_1.aboutData.description2] })] }), (0, jsx_runtime_1.jsx)("div", { className: "about-animation", children: (0, jsx_runtime_1.jsx)(animation_lottie_1.default, { animationPath: coding_json_1.default }) })] })] }) }));
}
exports.default = About;
