import React, { Component } from "react";
import { render } from "react-dom";

const PreLoader = ({ modifier = "" }) => (
    <div className={`c-loader c-loader__linear--color--black c-loader__linear c-loader__linear--md ${modifier}`}></div>
);

export default PreLoader;
