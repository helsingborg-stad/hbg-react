import PropTypes from 'prop-types';
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';
import DropdownToggle from './DropdownToggle';

//Enable spread operator
React.__spread = Object.assign;

//Class wrapped in onclickoutside HOC
class Dropdown extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
            PropTypes.arrayOf(
                PropTypes.oneOfType([PropTypes.element, PropTypes.string])
            )
        ]),
        list: PropTypes.array,
        title: PropTypes.string,
        toggleClass: PropTypes.string,
        itemKey: PropTypes.string
    };

    static defaultProps = {
        toggleClass: 'c-button c-button__filled c-button__filled--primary c-button--md',
        itemKey: 'dropdownItem'
    };

    constructor(props) {
        super(props);
        this.state = {
            listOpen: false
        };

        this.renderDepricatedList = this.renderDepricatedList.bind(this);
    }

    handleClickOutside() {
        if (!this.state.listOpen) {
            return;
        }

        this.setState({
            listOpen: false
        });
    }

    toggleList() {
        this.setState(prevState => ({ listOpen: !prevState.listOpen }));
    }

    render() {
        const {
            list,
            toggleItem,
            title,
            toggleClass,
            children,
            itemKey
        } = this.props;
        const { listOpen } = this.state;

        return (
            <div className="c-dropdown c-dropdown-button--down">
                <DropdownToggle
                    btnClass={toggleClass}
                    clickAction={() => this.toggleList()}
                    title={title}
                />

                {typeof children !== 'undefined' && listOpen && (
                    <DropdownList itemKey={itemKey}>
                        {Array.isArray(children) ? children : [children]}
                    </DropdownList>
                )}

                {/* Depricated way of showing dropdown items, use children instead */}
                {typeof list !== 'undefined' &&
                    typeof children === 'undefined' &&
                    listOpen &&
                    this.renderDepricatedList()}
            </div>
        );
    }

    renderDepricatedList() {
        const { list, itemKey } = this.props;

        return (
            <DropdownList itemKey={itemKey}>
                {list.map((item, index) => {
                    if (typeof item.title == 'undefined') {
                        return null;
                    }

                    let id = item.id || index;
                    let key = item.key || '';

                    let props = {};

                    props.key = id;
                    props.title = item.title;

                    if (typeof item.classes != 'undefined') {
                        props.classes = item.classes;
                    }

                    if (typeof item.href != 'undefined') {
                        props.href = item.href;
                    } else if (typeof item.onClickAction != 'undefined') {
                        props.onClickAction = () => item.onClickAction(id, key);
                    }

                    if (
                        typeof props.href == 'undefined' &&
                        typeof props.onClickAction == 'undefined'
                    ) {
                        return null;
                    }

                    return <DropdownItem {...props} />;
                })}
            </DropdownList>
        );
    }
}
export default onClickOutside(Dropdown);
