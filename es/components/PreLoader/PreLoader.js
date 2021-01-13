import React, { Component } from "react";
import { render } from "react-dom";

var PreLoader = function PreLoader(_ref) {
    var _ref$modifier = _ref.modifier,
        modifier = _ref$modifier === undefined ? "" : _ref$modifier;
    return React.createElement("div", { className: "c-loader c-loader__linear--color--black c-loader__linear c-loader__linear--md " + modifier });
};

export default PreLoader;