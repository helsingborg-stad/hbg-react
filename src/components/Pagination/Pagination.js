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
        let items = Array.from({length: total}, (_, i) => i + 1) // Fill array with all page numbers
        let firstItem = false;
        let lastItem = false;

        if(total > allowedItems) {
            let currentIndex = current -1;
            let offset = 2;
            let firstIndex = currentIndex - offset - 1 < 0 ? 0 : currentIndex - offset;
    
            if(total - current < offset) {
                offset = offset - (total - current);
                firstIndex = firstIndex - offset;
            }
    
            items = items.slice(firstIndex, allowedItems + firstIndex);
            firstItem = items.includes(1) ? false : 1;
            lastItem = items.includes(total) ? false : total;
        }

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

                {pageList.firstItem &&
                    <React.Fragment>
                        <div className="o-grid-fit">
                            <Button
                                color={current === pageList.firstItem ? 'primary' : 'plain'}
                                onClick={() => goToPage(pageList.firstItem)}
                                disabled={current === pageList.firstItem}
                            >
                                {pageList.firstItem}
                            </Button>
                        </div>
                        <div className="o-grid-fit">
                            ...
                        </div>
                    </React.Fragment>
                }

                {pageList.items.map((page, key) => (
                    <div className="o-grid-fit" key={key}>
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
                        <div className="o-grid-fit">
                            ...
                        </div>
                        <div className="o-grid-fit">
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
        );
    }
}

export default Pagination;
