"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreLoader = function PreLoader(_ref) {
    var _ref$modifier = _ref.modifier,
        modifier = _ref$modifier === undefined ? "" : _ref$modifier;
    return _react2.default.createElement("div", { className: "c-loader c-loader__linear--color--black c-loader__linear c-loader__linear c-loader__linear--sm " + modifier });
};

exports.default = PreLoader;
module.exports = exports["default"];