var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import dateFns from 'date-fns';
import { Button } from '../../index.js';
import PropTypes from 'prop-types';
import { format } from '../../helper/dateFns.js';
import classNames from 'classnames';

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

        var startDate = dateFns.startOfWeek(new Date(), {
            weekStartsOn: weekStartsOn
        });

        for (var i = 0; i < 7; i++) {
            days.push(React.createElement(
                'div',
                {
                    key: format(dateFns.addDays(startDate, i), dayFormat, locale),
                    className: 'grid-auto text-center'
                },
                React.createElement(
                    'strong',
                    null,
                    format(dateFns.addDays(startDate, i), dayFormat, locale)
                )
            ));
        }

        return React.createElement(
            'div',
            { className: 'grid no-gutter' },
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


        return React.createElement(
            'div',
            { className: 'calendar__header u-pb-4' },
            React.createElement(
                'div',
                { className: 'grid' },
                React.createElement(
                    'div',
                    {
                        className: classNames('calendar__prev grid-auto text-left u-flex u-justify-content-start', {
                            disabled: typeof minDate !== 'undefined' && dateFns.isSameMonth(minDate, month)
                        })
                    },
                    React.createElement(
                        Button,
                        { color: 'plain', onClick: prevMonth },
                        React.createElement('i', { className: 'pricon pricon-angle-left' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'grid-auto text-center' },
                    React.createElement(
                        'h4',
                        { className: 'calendar__month' },
                        format(month, monthFormat, locale)
                    ),
                    React.createElement(
                        'h4',
                        { className: 'calendar__year' },
                        format(month, yearFormat, locale)
                    )
                ),
                React.createElement(
                    'div',
                    {
                        className: classNames('calendar__next grid-auto text-right u-flex u-justify-content-end', {
                            disabled: typeof maxDate !== 'undefined' && dateFns.isSameMonth(maxDate, month)
                        })
                    },
                    React.createElement(
                        Button,
                        { color: 'plain', onClick: nextMonth },
                        React.createElement('i', { className: 'pricon pricon-angle-right' })
                    )
                )
            ),
            this.renderWeekDays()
        );
    };

    return CalendarHeader;
}(Component), _class.defaultProps = {
    monthFormat: 'MMMM',
    yearFormat: 'YYYY',
    weekStartsOn: 'monday',
    dayFormat: 'dd'
}, _temp);
CalendarHeader.propTypes = process.env.NODE_ENV !== "production" ? {
    month: PropTypes.instanceOf(Date).isRequired,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    prevMonth: PropTypes.func.isRequired,
    nextMonth: PropTypes.func.isRequired,
    monthFormat: PropTypes.string,
    yearFormat: PropTypes.string,
    dayFormat: PropTypes.string,
    weekStartsOn: PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
    locale: PropTypes.string
} : {};


export default CalendarHeader;