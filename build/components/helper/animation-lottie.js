"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var lottie_react_1 = __importDefault(require("lottie-react"));
var AnimationLottie = function (_a) {
    var animationPath = _a.animationPath;
    var defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
            width: "95%",
        },
    };
    return (0, jsx_runtime_1.jsx)(lottie_react_1.default, __assign({}, defaultOptions));
};
exports.default = AnimationLottie;
