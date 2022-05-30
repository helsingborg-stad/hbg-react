import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "../Button/Button";

class Pagination extends Component {
    static propTypes = {
        current: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        next: PropTypes.func.isRequired,
        prev: PropTypes.func.isRequired,
        goToPage: PropTypes.func.isRequired,
        langPrev: PropTypes.string,
        langNext: PropTypes.string
    };

    pageList() {
        const {
            total,
            current
        } = this.props;
        const allowedItems = 5;
        let list = Array.from({length: total}, (_, i) => i + 1) // Fill array with all page numbers

        if(total <= allowedItems) {
            return list;
        }

        let currentIndex = current -1;
        let offset = 2;
        let firstIndex = currentIndex - offset - 1 < 0 ? 0 : currentIndex - offset;

        if(total - current < offset) {
            offset = offset - (total - current);
            firstIndex = firstIndex - offset;
        }

        const items = list.slice(firstIndex, allowedItems + firstIndex);
        const firstItem = items.includes(1) ? false : 1;
        const lastItem = items.includes(total) ? false : total;
        return {firstItem, lastItem, items}
    }

    render() {
        const {
            current,
            total,
            next,
            prev,
            langPrev,
            langNext,
            goToPage
        } = this.props;

        const pageList = this.pageList();

        return (
            <div className="o-grid">
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

                        {pageList.firstItem &&
                            <React.Fragment>
                                <div className="grid-fit-content">
                                    <Button
                                        color={current === pageList.firstItem ? 'primary' : 'default'}
                                        onClick={() => goToPage(pageList.firstItem)}
                                        disabled={current === pageList.firstItem}
                                    >
                                        {pageList.firstItem}
                                    </Button>
                                </div>
                                <div className="grid-fit-content">
                                    ...
                                </div>
                            </React.Fragment>
                        }

                        {pageList.items.map(page => (
                            <div className="grid-fit-content">
                                <Button
                                    color={current === page ? 'primary' : 'default'}
                                    onClick={() => goToPage(page)}
                                    disabled={current === page}
                                >
                                    {page}
                                </Button>
                            </div>
                        ))}

                        {pageList.lastItem &&
                            <React.Fragment>
                                <div className="grid-fit-content">
                                    ...
                                </div>
                                <div className="grid-fit-content">
                                    <Button
                                        color={current === pageList.lastItem ? 'primary' : 'default'}
                                        onClick={() => goToPage(pageList.lastItem)}
                                        disabled={current === pageList.lastItem}
                                    >
                                        {pageList.lastItem}
                                    </Button>
                                </div>
                            </React.Fragment>
                        }
                        
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
