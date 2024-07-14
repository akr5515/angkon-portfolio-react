"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_fast_marquee_1 = __importDefault(require("react-fast-marquee"));
var theme_context_1 = require("../../../contexts/theme-context");
var skillsData_1 = require("../../../data/skillsData");
var skillsImage_1 = require("../../../utils/skillsImage");
require("./skills.css");
function Skills() {
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    var skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: "0px 0px 12px ".concat(theme.primary),
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "skills", style: { backgroundColor: theme.secondary }, children: [(0, jsx_runtime_1.jsx)("div", { className: "skillsHeader", children: (0, jsx_runtime_1.jsx)("h2", { style: { color: theme.primary }, children: "Skills" }) }), (0, jsx_runtime_1.jsx)("div", { className: "skillsContainer", children: (0, jsx_runtime_1.jsx)("div", { className: "skill--scroll", children: (0, jsx_runtime_1.jsx)(react_fast_marquee_1.default, { gradient: false, speed: 80, pauseOnHover: true, pauseOnClick: true, delay: 0, play: true, direction: "left", children: skillsData_1.skillsData.map(function (skill, id) { return ((0, jsx_runtime_1.jsxs)("div", { className: "skill--box", style: skillBoxStyle, children: [(0, jsx_runtime_1.jsx)("img", { src: (0, skillsImage_1.skillsImage)(skill), alt: skill }), (0, jsx_runtime_1.jsx)("h3", { style: { color: theme.tertiary }, children: skill })] }, id)); }) }) }) })] }));
}
exports.default = Skills;
