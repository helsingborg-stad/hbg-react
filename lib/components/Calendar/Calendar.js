'use strict';

exports.__esModule = true;

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dateFns = require('date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

var _dateFns3 = require('../../helper/dateFns.js');

var _CalendarHeader = require('./CalendarHeader.js');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = (_temp = _class = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        var currentMonth = props.currentMonth;


        _this.state = {
            currentMonth: currentMonth
        };

        _this.nextMonth = _this.nextMonth.bind(_this);
        _this.prevMonth = _this.prevMonth.bind(_this);
        return _this;
    }

    /**
     * Navigates to the next month, fires when clicking on next button
     * @return {void}
     */


    Calendar.prototype.nextMonth = function nextMonth() {
        var _props = this.props,
            maxDate = _props.maxDate,
            onChangeMonth = _props.onChangeMonth;
        var currentMonth = this.state.currentMonth;


        if (typeof maxDate !== 'undefined' && _dateFns2.default.isSameMonth(maxDate, currentMonth)) {
            return;
        }

        this.setState({
            currentMonth: _dateFns2.default.addMonths(this.state.currentMonth, 1)
        });

        if (typeof onChangeMonth === 'function') {
            onChangeMonth(this.state.currentMonth);
        }
    };

    /**
     * Navigates to the previous month, fires when clicking on prev button
     * @return {void}
     */


    Calendar.prototype.prevMonth = function prevMonth() {
        var _props2 = this.props,
            minDate = _props2.minDate,
            onChangeMonth = _props2.onChangeMonth;
        var currentMonth = this.state.currentMonth;


        if (typeof minDate !== 'undefined' && _dateFns2.default.isSameMonth(minDate, currentMonth)) {
            return;
        }

        this.setState({
            currentMonth: _dateFns2.default.subMonths(this.state.currentMonth, 1)
        });

        if (typeof onChangeMonth === 'function') {
            onChangeMonth(this.state.currentMonth);
        }
    };

    /**
     * Generates an array of rows for each event. Specifies width & offset for each event which is used when rendering each event.
     * @param  {array} events               Array of events
     * @param  {Date Object} firstDayOfWeek First day of the week
     * @param  {Date Object} lastDayOfWeek  Last day of the week
     * @return {array}                      Array containg event rows
     */


    Calendar.prototype.generateEventRows = function generateEventRows(events, firstDayOfWeek, lastDayOfWeek) {
        var eventRows = [];

        if (events.length <= 0) {
            return eventRows;
        }

        events.forEach(function (event) {
            if (_dateFns2.default.isBefore(event.stop, event.start)) {
                throw new Error('The stop date of an event cannot be earlier then the start date.');
            }

            if (!_dateFns2.default.isWithinRange(firstDayOfWeek, event.start, event.stop) && !_dateFns2.default.isWithinRange(lastDayOfWeek, event.start, event.stop) && !_dateFns2.default.isWithinRange(event.start, firstDayOfWeek, lastDayOfWeek)) {
                return;
            }

            var startDate = _dateFns2.default.isBefore(event.start, firstDayOfWeek) ? firstDayOfWeek : event.start;

            var stopDate = _dateFns2.default.isAfter(event.stop, lastDayOfWeek) ? lastDayOfWeek : event.stop;

            var width = _dateFns2.default.differenceInCalendarDays(stopDate, startDate) + 1;

            var offset = _dateFns2.default.differenceInCalendarDays(startDate, firstDayOfWeek);

            eventRows.push({
                event: event,
                width: width,
                offset: offset,
                startsThisWeek: startDate === event.start,
                endsThisWeek: stopDate === event.stop
            });
        });

        return eventRows;
    };

    /**
     * Renders the Calendar body
     * @return {React Component}
     */


    Calendar.prototype.renderBody = function renderBody() {
        var _this2 = this;

        var currentMonth = this.state.currentMonth;
        var _props3 = this.props,
            onClickDate = _props3.onClickDate,
            onClickEvent = _props3.onClickEvent,
            dateClassName = _props3.dateClassName,
            eventClassName = _props3.eventClassName,
            dateContent = _props3.dateContent,
            eventContent = _props3.eventContent,
            dateFormat = _props3.dateFormat,
            locale = _props3.locale,
            events = _props3.events;


        var weeks = (0, _dateFns3.getCalendarDatesByMonth)(currentMonth).map(function (days, index) {
            var eventRows = typeof events !== 'undefined' && events.length > 0 ? _this2.generateEventRows(events, days[0], days[6]) : [];

            return _react2.default.createElement(
                'div',
                {
                    key: (0, _dateFns3.format)(days[0], 'DMYYYY', locale) + '--' + (0, _dateFns3.format)(days[6], 'DMYYYY', locale),
                    className: 'calendar__week'
                },
                _react2.default.createElement(
                    'div',
                    { className: 'calendar__row calendar__row--bg calendar__row--float' },
                    days.map(function (date) {
                        return _react2.default.createElement('div', {
                            key: (0, _dateFns3.format)('background--' + date, 'D-M-YYYY', locale),
                            className: (0, _classnames2.default)('calendar__cell', 'calendar__cell--bg', {
                                'is-off-range': !_dateFns2.default.isSameMonth(date, currentMonth)
                            })
                        });
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'calendar__row calendar__row--date calendar__row--float' },
                    days.map(function (date) {
                        return _react2.default.createElement(
                            'div',
                            {
                                key: (0, _dateFns3.format)('date--' + date, 'D-M-YYYY', locale),
                                className: (0, _classnames2.default)('calendar__cell', {
                                    'is-off-range': !_dateFns2.default.isSameMonth(date, currentMonth)
                                })
                            },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: (0, _classnames2.default)('calendar__date', typeof dateClassName !== 'undefined' ? typeof dateClassName === 'function' ? dateClassName(date) : dateClassName : null),
                                    onClick: typeof onClickDate === 'function' ? function () {
                                        onClickDate(date);
                                    } : null
                                },
                                typeof dateContent === 'function' ? dateContent((0, _dateFns3.format)(date, dateFormat, locale), date) : (0, _dateFns3.format)(date, dateFormat)
                            )
                        );
                    })
                ),
                eventRows.length > 0 && eventRows.map(function (row, index) {
                    var _classNames;

                    var event = row.event,
                        width = row.width,
                        offset = row.offset,
                        startsThisWeek = row.startsThisWeek,
                        endsThisWeek = row.endsThisWeek;
                    var title = event.title;


                    return _react2.default.createElement(
                        'div',
                        {
                            className: 'calendar__row calendar__row--event',
                            key: 'event-row-' + index
                        },
                        _react2.default.createElement(
                            'div',
                            {
                                className: (0, _classnames2.default)('calendar__cell', (_classNames = {}, _classNames['calendar__cell--' + width] = true, _classNames['calendar__cell--offset-' + offset] = offset > 0, _classNames))
                            },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: (0, _classnames2.default)('calendar__event', {
                                        'calendar__event--extend-left': !startsThisWeek,
                                        'calendar__event--extend-right': !endsThisWeek
                                    }, typeof eventClassName !== 'undefined' ? typeof eventClassName === 'function' ? eventClassName(event) : eventClassName : null),
                                    onClick: typeof onClickEvent === 'function' ? function () {
                                        onClickEvent(event);
                                    } : null
                                },
                                typeof eventContent === 'function' ? eventContent(event) : title
                            )
                        )
                    );
                })
            );
        });
        return _react2.default.createElement(
            'div',
            { className: 'calendar__body' },
            weeks
        );
    };

    Calendar.prototype.render = function render() {
        var currentMonth = this.state.currentMonth;
        var _props4 = this.props,
            className = _props4.className,
            monthFormat = _props4.monthFormat,
            yearFormat = _props4.yearFormat,
            dayFormat = _props4.dayFormat,
            weekStartsOn = _props4.weekStartsOn,
            locale = _props4.locale,
            minDate = _props4.minDate,
            maxDate = _props4.maxDate;


        return _react2.default.createElement(
            'div',
            {
                className: (0, _classnames2.default)('calendar', typeof className !== 'undefined' ? className : null)
            },
            _react2.default.createElement(_CalendarHeader2.default, {
                month: currentMonth,
                prevMonth: this.prevMonth,
                nextMonth: this.nextMonth,
                monthFormat: monthFormat,
                yearFormat: yearFormat,
                dayFormat: dayFormat,
                weekStartsOn: weekStartsOn,
                locale: locale,
                minDate: minDate,
                maxDate: maxDate
            }),
            this.renderBody()
        );
    };

    return Calendar;
}(_react.Component), _class.defaultProps = {
    currentMonth: new Date(),
    monthFormat: 'MMMM',
    yearFormat: 'YYYY',
    dayFormat: 'dd',
    dateFormat: 'D',
    weekStartsOn: 'monday',
    locale: 'en'
}, _temp);
Calendar.propTypes = process.env.NODE_ENV !== "production" ? {
    /** @type {array} [description] */
    events: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        /** @type {string} Title of the event, which will be used as content */
        title: _propTypes2.default.string.isRequired,
        /** @type {Date Object} Start date of the event */
        start: _propTypes2.default.instanceOf(Date).isRequired,
        /** @type {Date Object} End date of the event, cannot be before start date */
        stop: _propTypes2.default.instanceOf(Date).isRequired
    })),
    /** @type {Date Object} The current month being displayed in the calendar */
    currentMonth: _propTypes2.default.instanceOf(Date),
    /** @type {Date Object} First month in the calendar, earliest in time */
    minDate: _propTypes2.default.instanceOf(Date),
    /** @type {Date Object} Last month in the calendar, latest in time */
    maxDate: _propTypes2.default.instanceOf(Date),
    /** @type {function} Function to call when current month changes eg. (date) => {console.log(date)} */
    onChangeMonth: _propTypes2.default.func,
    /** @type {function} Function to call when user clicks on a date eg. (date) => {console.log(date)} */
    onClickDate: _propTypes2.default.func,
    /** @type {function} Function to call when user clicks on an event, eg. (event) => {console.log(event)} */
    onClickEvent: _propTypes2.default.func,
    /** @type {string/array} Used to add a class name to the calendar wrapper */
    className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /** @type {string/array/function} Used to add a class name to dates, can be either string, array of string or function eg. (date) => {return 'custom-class'} */
    dateClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.func]),
    /** @type {string/array/function} Used to add a class name to events, can be either string, array of string or function eg. (event) => {return 'custom-class'} */
    eventClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.func]),
    /** @type {function} Modifies the HTML of dates eg. (formattedDate, dateObject) => {return <span>{formattedDate}</span>} */
    dateContent: _propTypes2.default.func,
    /** @type {function} Modifies the HTML of events eg. (event) => {return <span>{event.title}</span>} */
    eventContent: _propTypes2.default.func,
    /** @type {string} Set language of date labels */
    locale: _propTypes2.default.oneOf(['en', 'sv']),
    /** @type {string} Set year format */
    yearFormat: _propTypes2.default.string,
    /** @type {string} Set month format */
    monthFormat: _propTypes2.default.string,
    /** @type {string} Set week day format */
    dayFormat: _propTypes2.default.string,
    /** @type {string} Set date format */
    dateFormat: _propTypes2.default.string,
    /** @type {string} Set the first day of the week, eg. "monday" */
    weekStartsOn: _propTypes2.default.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])
} : {};
exports.default = Calendar;
module.exports = exports['default'];