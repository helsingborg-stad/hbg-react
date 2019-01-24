var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import dateFns from 'date-fns';
import { getCalendarDatesByMonth, format } from '../../helper/dateFns.js';
import CalendarHeader from './CalendarHeader.js';
import classNames from 'classnames';

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


        if (typeof maxDate !== 'undefined' && dateFns.isSameMonth(maxDate, currentMonth)) {
            return;
        }

        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
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


        if (typeof minDate !== 'undefined' && dateFns.isSameMonth(minDate, currentMonth)) {
            return;
        }

        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
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
            if (dateFns.isBefore(event.stop, event.start)) {
                throw new Error('The stop date of an event cannot be earlier then the start date.');
            }

            if (!dateFns.isWithinRange(firstDayOfWeek, event.start, event.stop) && !dateFns.isWithinRange(lastDayOfWeek, event.start, event.stop) && !dateFns.isWithinRange(event.start, firstDayOfWeek, lastDayOfWeek)) {
                return;
            }

            var startDate = dateFns.isBefore(event.start, firstDayOfWeek) ? firstDayOfWeek : event.start;

            var stopDate = dateFns.isAfter(event.stop, lastDayOfWeek) ? lastDayOfWeek : event.stop;

            var width = dateFns.differenceInCalendarDays(stopDate, startDate) + 1;

            var offset = dateFns.differenceInCalendarDays(startDate, firstDayOfWeek);

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


        var weeks = getCalendarDatesByMonth(currentMonth).map(function (days, index) {
            var eventRows = typeof events !== 'undefined' && events.length > 0 ? _this2.generateEventRows(events, days[0], days[6]) : [];

            return React.createElement(
                'div',
                {
                    key: format(days[0], 'DMYYYY', locale) + '--' + format(days[6], 'DMYYYY', locale),
                    className: 'calendar__week'
                },
                React.createElement(
                    'div',
                    { className: 'calendar__row calendar__row--bg calendar__row--float' },
                    days.map(function (date) {
                        return React.createElement('div', {
                            key: format('background--' + date, 'D-M-YYYY', locale),
                            className: classNames('calendar__cell', 'calendar__cell--bg', {
                                'is-off-range': !dateFns.isSameMonth(date, currentMonth)
                            })
                        });
                    })
                ),
                React.createElement(
                    'div',
                    { className: 'calendar__row calendar__row--date calendar__row--float' },
                    days.map(function (date) {
                        return React.createElement(
                            'div',
                            {
                                key: format('date--' + date, 'D-M-YYYY', locale),
                                className: classNames('calendar__cell', {
                                    'is-off-range': !dateFns.isSameMonth(date, currentMonth)
                                })
                            },
                            React.createElement(
                                'div',
                                {
                                    className: classNames('calendar__date', typeof dateClassName !== 'undefined' ? typeof dateClassName === 'function' ? dateClassName(date) : dateClassName : null),
                                    onClick: typeof onClickDate === 'function' ? function () {
                                        onClickDate(date);
                                    } : null
                                },
                                typeof dateContent === 'function' ? dateContent(format(date, dateFormat, locale), date) : format(date, dateFormat)
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


                    return React.createElement(
                        'div',
                        {
                            className: 'calendar__row calendar__row--event',
                            key: 'event-row-' + index
                        },
                        React.createElement(
                            'div',
                            {
                                className: classNames('calendar__cell', (_classNames = {}, _classNames['calendar__cell--' + width] = true, _classNames['calendar__cell--offset-' + offset] = offset > 0, _classNames))
                            },
                            React.createElement(
                                'div',
                                {
                                    className: classNames('calendar__event', {
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
        return React.createElement(
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


        return React.createElement(
            'div',
            {
                className: classNames('calendar', typeof className !== 'undefined' ? className : null)
            },
            React.createElement(CalendarHeader, {
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
}(Component), _class.defaultProps = {
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
    events: PropTypes.arrayOf(PropTypes.shape({
        /** @type {string} Title of the event, which will be used as content */
        title: PropTypes.string.isRequired,
        /** @type {Date Object} Start date of the event */
        start: PropTypes.instanceOf(Date).isRequired,
        /** @type {Date Object} End date of the event, cannot be before start date */
        stop: PropTypes.instanceOf(Date).isRequired
    })),
    /** @type {Date Object} The current month being displayed in the calendar */
    currentMonth: PropTypes.instanceOf(Date),
    /** @type {Date Object} First month in the calendar, earliest in time */
    minDate: PropTypes.instanceOf(Date),
    /** @type {Date Object} Last month in the calendar, latest in time */
    maxDate: PropTypes.instanceOf(Date),
    /** @type {function} Function to call when current month changes eg. (date) => {console.log(date)} */
    onChangeMonth: PropTypes.func,
    /** @type {function} Function to call when user clicks on a date eg. (date) => {console.log(date)} */
    onClickDate: PropTypes.func,
    /** @type {function} Function to call when user clicks on an event, eg. (event) => {console.log(event)} */
    onClickEvent: PropTypes.func,
    /** @type {string/array} Used to add a class name to the calendar wrapper */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    /** @type {string/array/function} Used to add a class name to dates, can be either string, array of string or function eg. (date) => {return 'custom-class'} */
    dateClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.func]),
    /** @type {string/array/function} Used to add a class name to events, can be either string, array of string or function eg. (event) => {return 'custom-class'} */
    eventClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.func]),
    /** @type {function} Modifies the HTML of dates eg. (formattedDate, dateObject) => {return <span>{formattedDate}</span>} */
    dateContent: PropTypes.func,
    /** @type {function} Modifies the HTML of events eg. (event) => {return <span>{event.title}</span>} */
    eventContent: PropTypes.func,
    /** @type {string} Set language of date labels */
    locale: PropTypes.oneOf(['en', 'sv']),
    /** @type {string} Set year format */
    yearFormat: PropTypes.string,
    /** @type {string} Set month format */
    monthFormat: PropTypes.string,
    /** @type {string} Set week day format */
    dayFormat: PropTypes.string,
    /** @type {string} Set date format */
    dateFormat: PropTypes.string,
    /** @type {string} Set the first day of the week, eg. "monday" */
    weekStartsOn: PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])
} : {};


export default Calendar;