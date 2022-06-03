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
            goToPage
        } = this.props;

        const pageList = this.pageList();

        return (
            <nav class="c-pagination u-display--flex u-justify-content--center" role="navigation" aria-label="Pagination Navigation">
                <ul className="c-pagination__list">
                    <li className="c-pagination__item--previous c-pagination__item">
                        <Button
                            color="default"
                            onClick={prev}
                            disabled={current === 1}
                            className="c-pagination__link"
                            size="small"
                        >
                            <i className="c-icon c-icon--size-sm material-icons" translate="no" role="img" alt="">
                                chevron_left
                            </i>
                        </Button>
                    </li>
                    
                    {pageList.firstItem &&
                        <React.Fragment>
                            <li className="c-pagination__item u-display--none@xs">
                                <Button
                                    color={current === pageList.firstItem ? 'primary' : 'default'}
                                    onClick={() => goToPage(pageList.firstItem)}
                                    disabled={current === pageList.firstItem}
                                    className="c-pagination__link"
                                    size="small"
                                >
                                    {pageList.firstItem}
                                </Button>
                            </li>
                            <li className="c-pagination__item u-display--none@xs">  
                                <i className="c-icon c-icon--size-sm material-icons" translate="no" role="img" alt="">
                                    more_horiz
                                </i>
                            </li>
                        </React.Fragment>
                    }

                    <li className="c-pagination__page-wrapper">
                        <ul className="c-pagination__pages">
                            {pageList.items.map((page, key) => (
                                <li className="c-pagination__item" key={key}>
                                    <Button
                                        color={current === page ? 'primary' : 'default'}
                                        onClick={() => goToPage(page)}
                                        disabled={current === page}
                                        className="c-pagination__link"
                                        size="small"
                                    >
                                        {page}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {pageList.lastItem &&
                        <React.Fragment>
                            <li className="c-pagination__item u-display--none@xs">  
                                <i className="c-icon c-icon--size-sm material-icons" translate="no" role="img" alt="">
                                    more_horiz
                                </i>
                            </li>
                            <li className="c-pagination__item u-display--none@xs">
                                <Button
                                    color={current === pageList.lastItem ? 'primary' : 'default'}
                                    onClick={() => goToPage(pageList.lastItem)}
                                    disabled={current === pageList.lastItem}
                                    className="c-pagination__link"
                                    size="small"
                                >
                                    {pageList.lastItem}
                                </Button>
                            </li>
                        </React.Fragment>
                    }
                    
                    <li className="c-pagination__item--next c-pagination__item">
                        <Button
                            color="default"
                            onClick={next}
                            disabled={current === total}
                            className="c-pagination__link"
                            size="small"
                        >
                            <i className="c-icon c-icon--size-sm material-icons" translate="no" role="img" alt="">
                                chevron_right
                            </i>
                        </Button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;
