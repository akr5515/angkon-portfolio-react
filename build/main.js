"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var App_1 = __importDefault(require("./App"));
require("./index.css");
var theme_context_1 = __importDefault(require("./contexts/theme-context"));
var material_1 = require("@mui/material");
var theme = (0, material_1.createTheme)();
var container = document.getElementById("root");
if (container) {
    var root = (0, client_1.createRoot)(container);
    root.render((0, jsx_runtime_1.jsx)(theme_context_1.default, { children: (0, jsx_runtime_1.jsx)(material_1.ThemeProvider, { theme: theme, children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }) }));
}
