"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fa_1 = require("react-icons/fa");
var Fade_1 = __importDefault(require("react-reveal/Fade"));
var placeholder_png_1 = __importDefault(require("../../../assets/png/placeholder.png"));
require("./single-project.css");
function SingleProjectUI(_a) {
    var id = _a.id, name = _a.name, desc = _a.desc, tags = _a.tags, code = _a.code, demo = _a.demo, image = _a.image, theme = _a.theme, classes = _a.classes;
    return ((0, jsx_runtime_1.jsx)(Fade_1.default, { bottom: true, children: (0, jsx_runtime_1.jsxs)("div", { className: "singleProject", style: { backgroundColor: theme.quaternary }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "projectContent", children: [(0, jsx_runtime_1.jsx)("h2", { id: name.replace(" ", "-").toLowerCase(), style: { color: theme.tertiary }, children: name }), (0, jsx_runtime_1.jsx)("img", { src: image ? image : placeholder_png_1.default, alt: name }), (0, jsx_runtime_1.jsxs)("div", { className: "project--showcaseBtn", children: [demo && ((0, jsx_runtime_1.jsx)("a", { href: demo, target: "_blank", rel: "noreferrer", className: classes.iconBtn, "aria-labelledby": "".concat(name.replace(" ", "-").toLowerCase(), " ").concat(name
                                        .replace(" ", "-")
                                        .toLowerCase(), "-demo"), children: (0, jsx_runtime_1.jsx)(fa_1.FaPlay, { id: "".concat(name.replace(" ", "-").toLowerCase(), "-demo"), className: classes.icon, "aria-label": "Demo" }) })), code && ((0, jsx_runtime_1.jsx)("a", { href: code, target: "_blank", rel: "noreferrer", className: classes.iconBtn, "aria-labelledby": "".concat(name.replace(" ", "-").toLowerCase(), " ").concat(name
                                        .replace(" ", "-")
                                        .toLowerCase(), "-code"), children: (0, jsx_runtime_1.jsx)(fa_1.FaCode, { id: "".concat(name.replace(" ", "-").toLowerCase(), "-code"), className: classes.icon, "aria-label": "Code" }) }))] })] }), (0, jsx_runtime_1.jsx)("p", { className: "project--desc", style: {
                        background: theme.secondary,
                        color: theme.tertiary,
                    }, children: desc }), tags.length !== 0 && ((0, jsx_runtime_1.jsx)("div", { className: "project--lang", style: {
                        background: theme.secondary,
                        color: theme.tertiary,
                    }, children: tags.map(function (tag, id) { return ((0, jsx_runtime_1.jsx)("span", { children: tag }, id)); }) }))] }, id) }));
}
exports.default = SingleProjectUI;
