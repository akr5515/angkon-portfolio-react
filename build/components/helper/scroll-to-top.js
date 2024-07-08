"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScrollToTop;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function ScrollToTop() {
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    (0, react_1.useEffect)(function () {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);
    return null;
}
