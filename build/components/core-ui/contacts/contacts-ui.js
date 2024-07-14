"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var ai_1 = require("react-icons/ai");
var fa_1 = require("react-icons/fa");
var fi_1 = require("react-icons/fi");
var hi_1 = require("react-icons/hi");
var io5_1 = require("react-icons/io5");
var theme_context_1 = require("../../../contexts/theme-context");
var contactsData_1 = require("../../../data/contactsData");
require("./contacts.css");
var ContactUI = function (_a) {
    var open = _a.open, success = _a.success, errMsg = _a.errMsg, handleClose = _a.handleClose, classes = _a.classes, handleContactForm = _a.handleContactForm, name = _a.name, setName = _a.setName, form = _a.form, email = _a.email, setEmail = _a.setEmail, message = _a.message, setMessage = _a.setMessage;
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "contacts", id: "contacts", style: { backgroundColor: theme.secondary }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "contacts--container", children: [(0, jsx_runtime_1.jsx)("h1", { style: { color: theme.primary }, children: "Contacts" }), (0, jsx_runtime_1.jsxs)("div", { className: "contacts-body", children: [(0, jsx_runtime_1.jsxs)("div", { className: "contacts-form", style: { display: "none" }, children: [(0, jsx_runtime_1.jsxs)("form", { ref: form, onSubmit: handleContactForm, children: [(0, jsx_runtime_1.jsxs)("div", { className: "input-container", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "Name", className: classes.label, children: "Name" }), (0, jsx_runtime_1.jsx)("input", { placeholder: "John Doe", value: name, onChange: function (e) { return setName(e.target.value); }, type: "text", name: "user_name", className: "form-input ".concat(classes.input) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "input-container", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "Email", className: classes.label, children: "Email" }), (0, jsx_runtime_1.jsx)("input", { placeholder: "John@doe.com", value: email, onChange: function (e) { return setEmail(e.target.value); }, type: "email", name: "user_email", className: "form-input ".concat(classes.input) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "input-container", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "Message", className: classes.label, children: "Message" }), (0, jsx_runtime_1.jsx)("textarea", { placeholder: "Type your message....", value: message, onChange: function (e) { return setMessage(e.target.value); }, name: "message", className: "form-message ".concat(classes.message) })] }), (0, jsx_runtime_1.jsx)("div", { className: "submit-btn", children: (0, jsx_runtime_1.jsxs)("button", { type: "submit", className: classes.submitBtn, children: [(0, jsx_runtime_1.jsx)("p", { children: !success ? "Send" : "Sent" }), (0, jsx_runtime_1.jsxs)("div", { className: "submit-icon", children: [(0, jsx_runtime_1.jsx)(ai_1.AiOutlineSend, { className: "send-icon", style: {
                                                                        animation: !success
                                                                            ? "initial"
                                                                            : "fly 0.8s linear both",
                                                                        position: success ? "absolute" : "initial",
                                                                    } }), (0, jsx_runtime_1.jsx)(ai_1.AiOutlineCheckCircle, { className: "success-icon", style: {
                                                                        display: !success ? "none" : "inline-flex",
                                                                        opacity: !success ? "0" : "1",
                                                                    } })] })] }) })] }), (0, jsx_runtime_1.jsx)(material_1.Snackbar, { anchorOrigin: {
                                            vertical: "top",
                                            horizontal: "center",
                                        }, open: open, autoHideDuration: 4000, onClose: handleClose, children: (0, jsx_runtime_1.jsx)(material_1.SnackbarContent, { action: (0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "small", "aria-label": "close", color: "inherit", onClick: handleClose, children: (0, jsx_runtime_1.jsx)(io5_1.IoClose, { fontSize: "small" }) }) }), style: {
                                                backgroundColor: theme.primary,
                                                color: theme.secondary,
                                                fontFamily: "var(--primaryFont)",
                                            }, message: errMsg }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "contacts-details", children: [(0, jsx_runtime_1.jsxs)("a", { href: "mailto:".concat(contactsData_1.contactsData.email), className: "personal-details", children: [(0, jsx_runtime_1.jsx)("div", { className: classes.detailsIcon, children: (0, jsx_runtime_1.jsx)(fi_1.FiAtSign, {}) }), (0, jsx_runtime_1.jsx)("p", { style: { color: theme.tertiary }, children: contactsData_1.contactsData.email })] }), (0, jsx_runtime_1.jsxs)("a", { href: "tel:".concat(contactsData_1.contactsData.phone), className: "personal-details", children: [(0, jsx_runtime_1.jsx)("div", { className: classes.detailsIcon, children: (0, jsx_runtime_1.jsx)(fi_1.FiPhone, {}) }), (0, jsx_runtime_1.jsx)("p", { style: { color: theme.tertiary }, children: contactsData_1.contactsData.phone })] }), (0, jsx_runtime_1.jsxs)("div", { className: "personal-details", children: [(0, jsx_runtime_1.jsx)("div", { className: classes.detailsIcon, children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlineLocationMarker, {}) }), (0, jsx_runtime_1.jsx)("p", { style: { color: theme.tertiary }, children: contactsData_1.contactsData.address })] }), (0, jsx_runtime_1.jsxs)("div", { className: "socialmedia-icons", children: [contactsData_1.contactsData.twitter && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.twitter, target: "_blank", rel: "noreferrer", className: classes.socialIcon, children: (0, jsx_runtime_1.jsx)(fa_1.FaTwitter, { "aria-label": "Twitter" }) })), contactsData_1.contactsData.github && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.github, target: "_blank", rel: "noreferrer", className: classes.socialIcon, children: (0, jsx_runtime_1.jsx)(fa_1.FaGithub, { "aria-label": "GitHub" }) })), contactsData_1.contactsData.linkedIn && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.linkedIn, target: "_blank", rel: "noreferrer", className: classes.socialIcon, children: (0, jsx_runtime_1.jsx)(fa_1.FaLinkedinIn, { "aria-label": "LinkedIn" }) })), contactsData_1.contactsData.medium && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.medium, target: "_blank", rel: "noreferrer", className: classes.socialIcon, children: (0, jsx_runtime_1.jsx)(fa_1.FaMediumM, { "aria-label": "Medium" }) })), contactsData_1.contactsData.stackOverflow && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.stackOverflow, target: "_blank", rel: "noreferrer", className: classes.socialIcon, children: (0, jsx_runtime_1.jsx)(fa_1.FaStackOverflow, { "aria-label": "Stack Overflow" }) })), contactsData_1.contactsData.facebook && ((0, jsx_runtime_1.jsx)("a", { href: contactsData_1.contactsData.facebook, target: "_blank", rel: "noreferrer", className: classes.socialIcon, children: (0, jsx_runtime_1.jsx)(fa_1.FaFacebook, { "aria-label": "facebook" }) }))] })] })] })] }), (0, jsx_runtime_1.jsx)("img", { src: theme.contactsimg, alt: "contacts", className: "contacts--img" })] }));
};
exports.default = ContactUI;
