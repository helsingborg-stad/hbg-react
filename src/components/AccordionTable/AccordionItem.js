import React, { Component } from "react";
import { render } from "react-dom";

const AccordionItem = ({ headings, content }) => (
    <section className="accordion-section">
        <label
            tabIndex="0"
            className="accordion-toggle"
            htmlFor="accordion-section-1"
        >
            <span className="accordion-table">
                {headings.map((heading, i) => (
                    <span key={i} className="column-header">
                        {heading}
                    </span>
                ))}
            </span>
        </label>
        <div className="accordion-content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </section>
);

export default AccordionItem;
