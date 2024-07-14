"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/styles");
var single_project_ui_1 = __importDefault(require("../core-ui/single-project/single-project-ui"));
var SingleProject = function (_a) {
    var id = _a.id, name = _a.name, desc = _a.desc, tags = _a.tags, code = _a.code, demo = _a.demo, image = _a.image, theme = _a.theme;
    var useStyles = (0, styles_1.makeStyles)(function (t) { return ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: "2px solid ".concat(theme.tertiary),
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: "2px solid ".concat(theme.secondary),
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }); });
    var classes = useStyles();
    return ((0, jsx_runtime_1.jsx)(single_project_ui_1.default, { classes: classes, id: id, name: name, desc: desc, tags: tags, code: code, demo: demo, image: image, theme: theme }));
};
exports.default = SingleProject;
