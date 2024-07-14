"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsDataGlobal = void 0;
var seven_svg_1 = __importDefault(require("../assets/svg/projects/seven.svg"));
var six_svg_1 = __importDefault(require("../assets/svg/projects/six.svg"));
exports.projectsDataGlobal = [
    {
        id: 1,
        projectName: 'Pocketalk Ventana',
        projectDesc: 'Worked on a project called Pocketalk Ventana as Frontend Engineer that highly focuses on pixel perfect designing with MUI, cross browser compatibility and optimized performance. ',
        tags: ['React', 'SAAS', 'Material UI', 'ChartJS'],
        code: '',
        demo: 'https://www.pocketalk.com/pocketalk-ventana/',
        image: six_svg_1.default
    },
    {
        id: 2,
        projectName: 'NFT Marketplace',
        projectDesc: 'This included implementation of designs with Ant Design from given Figma designs, writing logic for data handling, authentication, controlling interfaces according to different user roles with responsive design.',
        tags: ['React', 'Antd', 'i18n'],
        code: '',
        demo: 'https://market.openpost.co.jp',
        image: seven_svg_1.default
    }
];
