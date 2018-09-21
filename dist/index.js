"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeKeyCase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _changeCase = require("change-case");

var _changeCase2 = _interopRequireDefault(_changeCase);

var _curry = require("curry");

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const changeKeyCase = exports.changeKeyCase = (0, _curry2.default)(function changeKeyCase(caseType, o) {
  return Object.keys(o).reduce((lastValue, key) => _extends({}, lastValue, {
    [_changeCase2.default[caseType + "Case"](key)]: o[key]
  }), {});
});