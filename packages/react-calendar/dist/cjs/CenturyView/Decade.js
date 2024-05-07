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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var date_utils_1 = require("@wojtekmaj/date-utils");
var Tile_js_1 = __importDefault(require("../Tile.js"));
var dates_js_1 = require("../shared/dates.js");
var dateFormatter_js_1 = require("../shared/dateFormatter.js");
var className = 'react-calendar__century-view__decades__decade';
function Decade(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentCentury = _a.currentCentury, _c = _a.formatYear, formatYear = _c === void 0 ? dateFormatter_js_1.formatYear : _c, otherProps = __rest(_a, ["classes", "currentCentury", "formatYear"]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if (className) {
        classesProps.push(className);
    }
    if ((0, date_utils_1.getCenturyStart)(date).getFullYear() !== currentCentury) {
        classesProps.push("".concat(className, "--neighboringCentury"));
    }
    return ((0, jsx_runtime_1.jsx)(Tile_js_1.default, __assign({}, otherProps, { classes: classesProps, maxDateTransform: date_utils_1.getDecadeEnd, minDateTransform: date_utils_1.getDecadeStart, view: "century", children: (0, dates_js_1.getDecadeLabel)(locale, formatYear, date) })));
}
exports.default = Decade;
