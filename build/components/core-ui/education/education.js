"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var education_json_1 = __importDefault(require("../../../assets/lottie/education.json"));
var theme_context_1 = require("../../../contexts/theme-context");
var educationData_1 = require("../../../data/educationData");
var animation_lottie_1 = __importDefault(require("../../helper/animation-lottie"));
var education_card_1 = __importDefault(require("./education-card"));
require("./education.css");
function Education() {
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    return ((0, jsx_runtime_1.jsx)("div", { style: { backgroundColor: theme.secondary }, children: (0, jsx_runtime_1.jsx)(material_1.Container, { className: "education", id: "resume", children: (0, jsx_runtime_1.jsxs)("div", { className: "education-body", children: [(0, jsx_runtime_1.jsx)("div", { className: "education-image", children: (0, jsx_runtime_1.jsx)(animation_lottie_1.default, { animationPath: education_json_1.default }) }), (0, jsx_runtime_1.jsxs)("div", { className: "education-description", children: [(0, jsx_runtime_1.jsx)("h1", { style: { color: theme.primary }, children: "Education" }), educationData_1.educationData.map(function (edu) { return ((0, jsx_runtime_1.jsx)(education_card_1.default, { id: edu.id, institution: edu.institution, course: edu.course, startYear: edu.startYear, endYear: edu.endYear }, edu.id)); })] })] }) }) }));
}
exports.default = Education;
