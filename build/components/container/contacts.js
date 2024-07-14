"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/styles");
var react_1 = require("react");
var theme_context_1 = require("../../contexts/theme-context");
var contacts_ui_1 = __importDefault(require("../core-ui/contacts/contacts-ui"));
var Contacts = function () {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)(""), name = _b[0], setName = _b[1];
    var _c = (0, react_1.useState)(""), email = _c[0], setEmail = _c[1];
    var _d = (0, react_1.useState)(""), message = _d[0], setMessage = _d[1];
    var _e = (0, react_1.useState)(false), success = _e[0], setSuccess = _e[1];
    var _f = (0, react_1.useState)(""), errMsg = _f[0], setErrMsg = _f[1];
    var form = (0, react_1.useRef)();
    var theme = (0, react_1.useContext)(theme_context_1.ThemeContext).theme;
    var handleClose = function (event, reason) {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    var useStyles = (0, styles_1.makeStyles)(function (t) { return ({
        input: {
            border: "2px solid ".concat(theme.buttonColor),
            backgroundColor: "".concat(theme.secondary),
            color: "".concat(theme.tertiary),
            fontFamily: "var(--primaryFont)",
            fontWeight: 500,
            transition: "border 0.2s ease-in-out",
            "&:focus": {
                border: "2px solid ".concat(theme.primary),
            },
        },
        message: {
            border: "2px solid ".concat(theme.buttonColor),
            backgroundColor: "".concat(theme.secondary),
            color: "".concat(theme.tertiary),
            fontFamily: "var(--primaryFont)",
            fontWeight: 500,
            transition: "border 0.2s ease-in-out",
            "&:focus": {
                border: "2px solid ".concat(theme.primary),
            },
        },
        label: {
            backgroundColor: "".concat(theme.secondary),
            color: "".concat(theme.tertiary),
            fontFamily: "var(--primaryFont)",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "0 5px",
            transform: "translate(25px,50%)",
            display: "inline-flex",
        },
        socialIcon: {
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "21px",
            backgroundColor: theme.buttonColor,
            color: theme.secondary,
            transition: "250ms ease-in-out",
            "&:hover": {
                transform: "scale(1.1)",
                color: theme.secondary,
                backgroundColor: theme.primary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.buttonColor,
            color: theme.secondary,
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "23px",
            transition: "250ms ease-in-out",
            flexShrink: 0,
            "&:hover": {
                transform: "scale(1.1)",
                color: theme.secondary,
                backgroundColor: theme.primary,
            },
        },
        submitBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: "250ms ease-in-out",
            "&:hover": {
                transform: "scale(1.08)",
                color: theme.secondary,
                backgroundColor: theme.buttonColor,
            },
        },
    }); });
    var classes = useStyles();
    var handleContactForm = function (e) {
        e.preventDefault();
        // if (name && email && message) {
        //   if (isEmail(email)) {
        //     emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
        //       .then((result) => {
        //         console.log('success');
        //         setSuccess(true);
        //         setErrMsg('');
        //         setName('');
        //         setEmail('');
        //         setMessage('');
        //         setOpen(false);
        //       }, (error) => {
        //         console.log(error.text);
        //       });
        //   } else {
        //     setErrMsg('Invalid email');
        //     setOpen(true);
        //   }
        // } else {
        //   setErrMsg('Enter all the fields');
        //   setOpen(true);
        // }
    };
    return ((0, jsx_runtime_1.jsx)(contacts_ui_1.default, { open: open, success: success, errMsg: errMsg, handleClose: handleClose, classes: classes, handleContactForm: handleContactForm, name: name, setName: setName, form: form, email: email, setEmail: setEmail, message: message, setMessage: setMessage }));
};
exports.default = Contacts;
