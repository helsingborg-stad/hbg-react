'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchField = function SearchField(_ref) {
    var doSearch = _ref.doSearch,
        langFilterOn = _ref.langFilterOn;
    return _react2.default.createElement(
        'div',
        { className: 'accordion-search' },
        _react2.default.createElement('input', { type: 'text', onChange: doSearch, placeholder: langFilterOn })
    );
};

exports.default = SearchField;
module.exports = exports['default'];