"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var hi_1 = require("react-icons/hi");
var react_router_dom_1 = require("react-router-dom");
var single_project_1 = __importDefault(require("../../container/single-project"));
require("./projectAchievement.css");
var projectsDataGlobal_1 = require("../../../data/projectsDataGlobal");
function ProjectAchievementUI(_a) {
    var theme = _a.theme, classes = _a.classes;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: projectsDataGlobal_1.projectsDataGlobal.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "projects", id: "projects", style: { backgroundColor: theme.secondary }, children: [(0, jsx_runtime_1.jsx)("div", { className: "projects--header", children: (0, jsx_runtime_1.jsx)("h1", { style: { color: theme.primary }, children: "Global Projects" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "projects--body", children: [(0, jsx_runtime_1.jsx)("div", { className: "projects--bodyContainer", children: projectsDataGlobal_1.projectsDataGlobal.slice(0, 3).map(function (project) { return ((0, jsx_runtime_1.jsx)(single_project_1.default, { theme: theme, id: project.id, name: project.projectName, desc: project.projectDesc, tags: project.tags, code: project.code, demo: project.demo, image: project.image }, project.id)); }) }), projectsDataGlobal_1.projectsDataGlobal.length > 3 && ((0, jsx_runtime_1.jsx)("div", { className: "projects--viewAll", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/projects", children: (0, jsx_runtime_1.jsxs)("button", { className: classes.viewAllBtn, children: ["View All", (0, jsx_runtime_1.jsx)(hi_1.HiArrowRight, { className: classes.viewArr })] }) }) }))] })] })) }));
}
exports.default = ProjectAchievementUI;
