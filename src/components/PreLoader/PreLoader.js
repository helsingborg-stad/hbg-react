import React, { Component } from "react";
import { render } from "react-dom";

const PreLoader = ({ modifier = "" }) => (
    <div className={`loading ${modifier}`}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default PreLoader;
