"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_helmet_1 = require("react-helmet");
var headerData_1 = require("../../data/headerData");
var navbar_1 = __importDefault(require("../../components/container/navbar"));
var landing_1 = __importDefault(require("../../components/container/landing"));
var about_1 = __importDefault(require("../../components/core-ui/about/about"));
var experience_1 = __importDefault(require("../../components/core-ui/experience/experience"));
var projectsAchieveContainer_1 = __importDefault(require("../../components/container/projectsAchieveContainer"));
var skills_1 = __importDefault(require("../../components/core-ui/skills/skills"));
var projects_1 = __importDefault(require("../../components/container/projects"));
var education_1 = __importDefault(require("../../components/core-ui/education/education"));
var contacts_1 = __importDefault(require("../../components/container/contacts"));
function HomePage() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_helmet_1.Helmet, { children: (0, jsx_runtime_1.jsxs)("title", { children: [headerData_1.headerData.name, " - Porfolio"] }) }), (0, jsx_runtime_1.jsx)(navbar_1.default, {}), (0, jsx_runtime_1.jsx)(landing_1.default, {}), (0, jsx_runtime_1.jsx)(about_1.default, {}), (0, jsx_runtime_1.jsx)(experience_1.default, {}), (0, jsx_runtime_1.jsx)(projectsAchieveContainer_1.default, {}), (0, jsx_runtime_1.jsx)(skills_1.default, {}), (0, jsx_runtime_1.jsx)(projects_1.default, {}), (0, jsx_runtime_1.jsx)(education_1.default, {}), (0, jsx_runtime_1.jsx)(contacts_1.default, {})] }));
}
exports.default = HomePage;
