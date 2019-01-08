import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "../Button/Button";

class Pagination extends Component {
    static propTypes = {
        current: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        next: PropTypes.func.isRequired,
        prev: PropTypes.func.isRequired,
        input: PropTypes.func.isRequired,
        langPrev: PropTypes.string,
        langNext: PropTypes.string
    };

    render() {
        const {
            current,
            total,
            next,
            prev,
            input,
            langPrev,
            langNext
        } = this.props;

        return (
            <div className="grid">
                <div className="grid-fit-content u-mr-auto">
                    <div className="grid sm-gutter grid-va-middle">
                        <div className="grid-xs-fit-content">
                            <input
                                value={current}
                                type="number"
                                min="1"
                                max={total}
                                onChange={input}
                            />
                        </div>
                        <div className="grid-fit-content">
                            <span> / {total}</span>
                        </div>
                    </div>
                </div>
                <div className="grid-fit-content">
                    <div className="grid sm-gutter">
                        <div className="grid-fit-content">
                            <Button
                                color="primary"
                                onClick={prev}
                                disabled={current === 1}
                            >
                                <i className="pricon pricon-previous u-hidden@md u-hidden@lg u-hidden@xl" />{" "}
                                {langPrev ? (
                                    <span className="u-hidden@xs u-hidden@sm">
                                        {langPrev}
                                    </span>
                                ) : null}
                            </Button>
                        </div>
                        <div className="grid-fit-content">
                            <Button
                                color="primary"
                                onClick={next}
                                disabled={current === total}
                            >
                                {langNext ? (
                                    <span className="u-hidden@xs u-hidden@sm">
                                        {langNext}
                                    </span>
                                ) : null}{" "}
                                <i className="pricon pricon-next u-hidden@md u-hidden@lg u-hidden@xl" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pagination;
