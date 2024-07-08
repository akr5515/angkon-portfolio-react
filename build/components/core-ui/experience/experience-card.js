"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/styles");
var react_1 = require("react");
var Fade_1 = __importDefault(require("react-reveal/Fade"));
var expImgBlack_svg_1 = __importDefault(require("../../../assets/svg/experience/expImgBlack.svg"));
var expImgWhite_svg_1 = __importDefault(require("../../../assets/svg/experience/expImgWhite.svg"));
var theme_context_1 = require("../../../contexts/theme-context");
require("./experience.css");
function ExperienceCard(_a) {
    var id = _a.id, company = _a.company, jobtitle = _a.jobtitle, startYear = _a.startYear, endYear = _a.endYear;
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    var useStyles = (0, styles_1.makeStyles)(function (t) { return ({
        experienceCard: {
            backgroundColor: theme.quaternary,
        },
    }); });
    var classes = useStyles();
    return ((0, jsx_runtime_1.jsx)(Fade_1.default, { bottom: true, children: (0, jsx_runtime_1.jsxs)("div", { className: "experience-card ".concat(classes.experienceCard), children: [(0, jsx_runtime_1.jsx)("div", { className: "expcard-img", style: { backgroundColor: theme.primary }, children: (0, jsx_runtime_1.jsx)("img", { src: theme.type === 'light' ? expImgBlack_svg_1.default : expImgWhite_svg_1.default, alt: "" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "experience-details", children: [(0, jsx_runtime_1.jsxs)("h6", { style: { color: theme.primary }, children: [startYear, "-", endYear] }), (0, jsx_runtime_1.jsx)("h4", { style: { color: theme.tertiary }, children: jobtitle }), (0, jsx_runtime_1.jsx)("h5", { style: { color: theme.tertiary }, children: company })] })] }, id) }));
}
exports.default = ExperienceCard;
