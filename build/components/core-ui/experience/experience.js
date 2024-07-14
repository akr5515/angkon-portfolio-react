"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var development_json_1 = __importDefault(require("../../../assets/lottie/development.json"));
var theme_context_1 = require("../../../contexts/theme-context");
var experienceData_1 = require("../../../data/experienceData");
var animation_lottie_1 = __importDefault(require("../../helper/animation-lottie"));
var experience_card_1 = __importDefault(require("./experience-card"));
require("./experience.css");
function Experience() {
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    return ((0, jsx_runtime_1.jsx)("div", { style: { backgroundColor: theme.secondary }, children: (0, jsx_runtime_1.jsx)(material_1.Container, { className: "experience", id: "experience", children: (0, jsx_runtime_1.jsxs)("div", { className: "experience-body", children: [(0, jsx_runtime_1.jsx)("div", { className: "experience-image", children: (0, jsx_runtime_1.jsx)(animation_lottie_1.default, { animationPath: development_json_1.default }) }), (0, jsx_runtime_1.jsxs)("div", { className: "experience-description", children: [(0, jsx_runtime_1.jsx)("h1", { style: { color: theme.primary }, children: "Experience" }), experienceData_1.experienceData.map(function (exp) { return ((0, jsx_runtime_1.jsx)(experience_card_1.default, { id: exp.id, jobtitle: exp.jobtitle, company: exp.company, startYear: exp.startYear, endYear: exp.endYear }, exp.id)); })] })] }) }) }));
}
exports.default = Experience;
