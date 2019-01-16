'use strict';

exports.__esModule = true;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dateFns = require('date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

var _index = require('../../index.js');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateFns3 = require('../../helper/dateFns.js');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarHeader = (_temp = _class = function (_Component) {
    _inherits(CalendarHeader, _Component);

    function CalendarHeader() {
        _classCallCheck(this, CalendarHeader);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    CalendarHeader.prototype.renderWeekDays = function renderWeekDays() {
        var _props = this.props,
            dayFormat = _props.dayFormat,
            weekStartsOn = _props.weekStartsOn,
            locale = _props.locale;

        var weekDays = {
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6,
            sunday: 0
        };
        weekStartsOn = weekDays[weekStartsOn];

        var days = [];

        var startDate = _dateFns2.default.startOfWeek(new Date(), {
            weekStartsOn: weekStartsOn
        });

        for (var i = 0; i < 7; i++) {
            days.push(_react2.default.createElement(
                'div',
                {
                    key: (0, _dateFns3.format)(_dateFns2.default.addDays(startDate, i), dayFormat, locale),
                    className: 'calendar__cell'
                },
                _react2.default.createElement(
                    'div',
                    { className: 'calendar__day' },
                    _react2.default.createElement(
                        'span',
                        null,
                        (0, _dateFns3.format)(_dateFns2.default.addDays(startDate, i), dayFormat, locale)
                    )
                )
            ));
        }

        return _react2.default.createElement(
            'div',
            { className: 'calendar__row calendar__row--weekdays' },
            days
        );
    };

    CalendarHeader.prototype.render = function render() {
        var _props2 = this.props,
            month = _props2.month,
            prevMonth = _props2.prevMonth,
            nextMonth = _props2.nextMonth,
            monthFormat = _props2.monthFormat,
            yearFormat = _props2.yearFormat,
            locale = _props2.locale,
            minDate = _props2.minDate,
            maxDate = _props2.maxDate;


        return _react2.default.createElement(
            'div',
            { className: 'calendar__header' },
            _react2.default.createElement(
                'div',
                { className: 'calendar__row' },
                _react2.default.createElement(
                    'div',
                    { className: 'calendar__cell' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: (0, _classnames2.default)('calendar__nav calendar__nav--prev', {
                                disabled: typeof minDate !== 'undefined' && _dateFns2.default.isSameMonth(minDate, month)
                            })
                        },
                        _react2.default.createElement(
                            _index.Button,
                            { color: 'plain', onClick: prevMonth },
                            _react2.default.createElement('i', { className: 'pricon pricon-angle-left' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'calendar__cell' },
                    _react2.default.createElement(
                        'div',
                        { className: 'calendar__title' },
                        _react2.default.createElement(
                            'div',
                            { className: 'calendar__month' },
                            (0, _dateFns3.format)(month, monthFormat, locale)
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'calendar__year' },
                            (0, _dateFns3.format)(month, yearFormat, locale)
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'calendar__cell' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: (0, _classnames2.default)('calendar__nav calendar__nav--next', {
                                disabled: typeof maxDate !== 'undefined' && _dateFns2.default.isSameMonth(maxDate, month)
                            })
                        },
                        _react2.default.createElement(
                            _index.Button,
                            { color: 'plain', onClick: nextMonth },
                            _react2.default.createElement('i', { className: 'pricon pricon-angle-right' })
                        )
                    )
                )
            ),
            this.renderWeekDays()
        );
    };

    return CalendarHeader;
}(_react.Component), _class.defaultProps = {
    monthFormat: 'MMMM',
    yearFormat: 'YYYY',
    weekStartsOn: 'monday',
    dayFormat: 'dd'
}, _temp);
CalendarHeader.propTypes = process.env.NODE_ENV !== "production" ? {
    month: _propTypes2.default.instanceOf(Date).isRequired,
    minDate: _propTypes2.default.instanceOf(Date),
    maxDate: _propTypes2.default.instanceOf(Date),
    prevMonth: _propTypes2.default.func.isRequired,
    nextMonth: _propTypes2.default.func.isRequired,
    monthFormat: _propTypes2.default.string,
    yearFormat: _propTypes2.default.string,
    dayFormat: _propTypes2.default.string,
    weekStartsOn: _propTypes2.default.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
    locale: _propTypes2.default.string
} : {};
exports.default = CalendarHeader;
module.exports = exports['default'];