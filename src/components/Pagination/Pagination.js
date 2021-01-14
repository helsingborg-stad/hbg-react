import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "../Button/Button";
import Input from "../Form/Input";


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
            <div className="o-grid">
                <div className="o-grid-fit u-mr-auto">
                    <div className="o-grid sm-gutter grid-va-middle">
                        <div className="o-grid-fit">
                            <div className="c-field">
                                <Input
                                    value={current}
                                    type="number"
                                    min="1"
                                    max={total}
                                    handleChange={input}
                                    style={{maxWidth: '80px'}}
                                />
                            </div>
                        </div>
                        <div className="o-grid-fit  u-display--flex u-align-items--center">
                            <span> / {total}</span>
                        </div>
                    </div>
                </div>
                <div className="o-grid-fit">
                    <div className="o-grid sm-gutter">
                        <div className="o-grid-fit">
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
                        <div className="o-grid-fit">
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
