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

    Calendar.prototype.nextMonth = function nextMonth() {
        var maxDate = this.props.maxDate;
        var currentMonth = this.state.currentMonth;


        if (typeof maxDate !== 'undefined' && dateFns.isSameMonth(maxDate, currentMonth)) {
            return;
        }

        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    Calendar.prototype.prevMonth = function prevMonth() {
        var minDate = this.props.minDate;
        var currentMonth = this.state.currentMonth;


        if (typeof minDate !== 'undefined' && dateFns.isSameMonth(minDate, currentMonth)) {
            return;
        }

        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    Calendar.prototype.renderBody = function renderBody() {
        var currentMonth = this.state.currentMonth;
        var _props = this.props,
            onClickWeek = _props.onClickWeek,
            onClickDate = _props.onClickDate,
            weekClassName = _props.weekClassName,
            cellClassName = _props.cellClassName,
            cellContent = _props.cellContent,
            dateFormat = _props.dateFormat,
            locale = _props.locale;


        var weeks = getCalendarDatesByMonth(currentMonth);

        return React.createElement(
            'div',
            { className: 'calendar__body' },
            weeks.map(function (days) {
                var weekClassNames = classNames('calendar__row', 'grid', 'no-gutter', typeof weekClassName !== 'undefined' ? typeof weekClassName === 'function' ? cellClassName(days) : weekClassName : null);
                return React.createElement(
                    'div',
                    {
                        className: weekClassNames,
                        onClick: typeof onClickWeek === 'function' ? function () {
                            onClickWeek(days);
                        } : null,
                        key: format(days[0], 'D-M-YYYY', locale) + '-' + format(days[6], 'D-M-YYYY', locale)
                    },
                    days.map(function (date) {
                        var cellClassNames = classNames('calendar__cell', 'grid-xs-auto', 'text-center', 'ratio-1-1', typeof cellClassName !== 'undefined' ? typeof cellClassName === 'function' ? cellClassName(date) : cellClassName : null);
                        return React.createElement(
                            'div',
                            {
                                className: cellClassNames,
                                onClick: typeof onClickDate === 'function' ? function () {
                                    onClickDate(date);
                                } : null,
                                key: format(date, 'D-M-YYYY')
                            },
                            React.createElement(
                                'div',
                                { className: 'calendar__cell_inner' },
                                typeof cellContent !== 'undefined' ? cellContent(date, format(date, dateFormat, locale)) : format(date, dateFormat, locale)
                            )
                        );
                    })
                );
            })
        );
    };

    Calendar.prototype.render = function render() {
        var currentMonth = this.state.currentMonth;
        var _props2 = this.props,
            className = _props2.className,
            monthFormat = _props2.monthFormat,
            yearFormat = _props2.yearFormat,
            dayFormat = _props2.dayFormat,
            weekStartsOn = _props2.weekStartsOn,
            locale = _props2.locale,
            minDate = _props2.minDate,
            maxDate = _props2.maxDate;


        var calendarClassNames = classNames('calendar', typeof className !== 'undefined' ? className : null);

        return React.createElement(
            'div',
            { className: calendarClassNames },
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
    weekStartsOn: 'monday'
}, _temp);
Calendar.propTypes = process.env.NODE_ENV !== "production" ? {
    /** @type {Date Object} The current month being displayed in the calendar */
    currentMonth: PropTypes.instanceOf(Date),
    /** @type {Date Object} First month in the calendar, earliest in time */
    minDate: PropTypes.instanceOf(Date),
    /** @type {Date Object} Last month in the calendar, latest in time */
    maxDate: PropTypes.instanceOf(Date),
    /** @type {function} Function called when user clicks on a week/row */
    onClickWeek: PropTypes.func,
    /** @type {function} Function called when user clicks on a date */
    onClickDate: PropTypes.func,
    /** @type {string/array} Used to add a class name to the calendar wrapper */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    /** @type {string/array/function} Used to add a class name to weeks */
    weekClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.func]),
    /** @type {string/array/function} Used to add a class name to cells */
    cellClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.func]),
    /** @type {function} Adds custom content within calendar cells */
    cellContent: PropTypes.func,
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