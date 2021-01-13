function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var DropdownList = function (_Component) {
    _inherits(DropdownList, _Component);

    function DropdownList() {
        _classCallCheck(this, DropdownList);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    DropdownList.prototype.render = function render() {
        var props = this.props;
        return React.createElement(
            'div',
            { className: 'c-dropdown__list c-dropdown__list--down c-dropdown__list--visible' },
            React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    null,
                    props.children.map(function (child, index) {
                        return React.createElement(
                            'li',
                            { key: props.itemKey + '-' + index },
                            child
                        );
                    })
                )
            )
        );
    };

    return DropdownList;
}(Component);

export default DropdownList;