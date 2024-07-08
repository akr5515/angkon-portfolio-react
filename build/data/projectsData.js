"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsData = void 0;
var eight_svg_1 = __importDefault(require("../assets/svg/projects/eight.svg"));
var seven_svg_1 = __importDefault(require("../assets/svg/projects/seven.svg"));
var six_svg_1 = __importDefault(require("../assets/svg/projects/six.svg"));
exports.projectsData = [
    {
        id: 1,
        projectName: "ChartJS Customization",
        projectDesc: "ChartJS customization with react typescript",
        tags: ["React", "Typescript", "ChartJS"],
        code: "https://github.com/akr5515/react-chartjs-implementation",
        demo: "https://react-chartjs-implementation.vercel.app",
        image: six_svg_1.default,
    },
    {
        id: 2,
        projectName: "Real Estate Project",
        projectDesc: "Real estate project made with NextJS.",
        tags: ["NextJS"],
        code: "https://github.com/akr5515/Real-Estate-NextJS",
        demo: "https://real-estate-next-js-gray.vercel.app",
        image: seven_svg_1.default,
    },
    {
        id: 3,
        projectName: "More on GitHub",
        projectDesc: "Visit GitHub profile to explore more projects.",
        tags: [],
        code: "https://github.com/akr5515",
        demo: "",
        image: eight_svg_1.default,
    },
];
// Do not remove any fields.
// Leave it blank instead as shown below
/*
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
},
*/
