'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _AccordionItem = require('./AccordionItem');

var _AccordionItem2 = _interopRequireDefault(_AccordionItem);

var _SearchField = require('./SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionTable = function AccordionTable(_ref) {
    var headings = _ref.headings,
        items = _ref.items,
        showSearch = _ref.showSearch,
        doSearch = _ref.doSearch,
        langFilterOn = _ref.langFilterOn,
        langNoResults = _ref.langNoResults;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'header',
            { className: 'accordion-table accordion-table-head' },
            headings.map(function (heading, i) {
                return _react2.default.createElement(
                    'span',
                    { key: i, className: 'column-header' },
                    heading
                );
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'accordion accordion-icon accordion-list' },
            showSearch && _react2.default.createElement(_SearchField2.default, { doSearch: doSearch, langFilterOn: langFilterOn }),
            Object.keys(items).length === 0 && _react2.default.createElement(
                'div',
                { className: 'gutter' },
                _react2.default.createElement(
                    'p',
                    null,
                    langNoResults
                )
            ),
            items.map(function (item) {
                return _react2.default.createElement(_AccordionItem2.default, {
                    key: item.id,
                    headings: item.headings,
                    content: item.content
                });
            })
        )
    );
};

exports.default = AccordionTable;
module.exports = exports['default'];