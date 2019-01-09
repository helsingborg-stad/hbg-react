import PropTypes from 'prop-types';
import React, { Component } from 'react';
import dateFns from 'date-fns';
import { getCalendarDatesByMonth, format } from '../../helper/dateFns.js';
import CalendarHeader from './CalendarHeader.js';
import classNames from 'classnames';

class Calendar extends Component {
    static propTypes = {
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
        weekClassName: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.func
        ]),
        /** @type {string/array/function} Used to add a class name to cells */
        cellClassName: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.func
        ]),
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
        weekStartsOn: PropTypes.oneOf([
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday'
        ])
    };

    static defaultProps = {
        currentMonth: new Date(),
        monthFormat: 'MMMM',
        yearFormat: 'YYYY',
        dayFormat: 'dd',
        dateFormat: 'D',
        weekStartsOn: 'monday'
    };

    constructor(props) {
        super(props);
        const { currentMonth } = props;

        this.state = {
            currentMonth: currentMonth
        };

        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
    }

    nextMonth() {
        const { maxDate } = this.props;
        const { currentMonth } = this.state;

        if (
            typeof maxDate !== 'undefined' &&
            dateFns.isSameMonth(maxDate, currentMonth)
        ) {
            return;
        }

        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    }

    prevMonth() {
        const { minDate } = this.props;
        const { currentMonth } = this.state;

        if (
            typeof minDate !== 'undefined' &&
            dateFns.isSameMonth(minDate, currentMonth)
        ) {
            return;
        }

        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    }

    renderBody() {
        const { currentMonth } = this.state;

        const {
            onClickWeek,
            onClickDate,
            weekClassName,
            cellClassName,
            cellContent,
            dateFormat,
            locale
        } = this.props;

        const weeks = getCalendarDatesByMonth(currentMonth);

        return (
            <div className="calendar__body">
                {/* Render Weeks */}
                {weeks.map(days => {
                    const weekClassNames = classNames(
                        'calendar__row',
                        'grid',
                        'no-gutter',
                        typeof weekClassName !== 'undefined'
                            ? typeof weekClassName === 'function'
                                ? cellClassName(days)
                                : weekClassName
                            : null
                    );
                    return (
                        <div
                            className={weekClassNames}
                            onClick={
                                typeof onClickWeek === 'function'
                                    ? () => {
                                          onClickWeek(days);
                                      }
                                    : null
                            }
                            key={
                                format(days[0], 'D-M-YYYY', locale) +
                                '-' +
                                format(days[6], 'D-M-YYYY', locale)
                            }
                        >
                            {/* Render days */}
                            {days.map(date => {
                                const cellClassNames = classNames(
                                    'calendar__cell',
                                    'grid-xs-auto',
                                    'text-center',
                                    'ratio-1-1',
                                    typeof cellClassName !== 'undefined'
                                        ? typeof cellClassName === 'function'
                                            ? cellClassName(date)
                                            : cellClassName
                                        : null
                                );
                                return (
                                    <div
                                        className={cellClassNames}
                                        onClick={
                                            typeof onClickDate === 'function'
                                                ? () => {
                                                      onClickDate(date);
                                                  }
                                                : null
                                        }
                                        key={format(date, 'D-M-YYYY')}
                                    >
                                        <div className="calendar__cell_inner">
                                            {typeof cellContent !== 'undefined'
                                                ? cellContent(
                                                      date,
                                                      format(
                                                          date,
                                                          dateFormat,
                                                          locale
                                                      )
                                                  )
                                                : format(
                                                      date,
                                                      dateFormat,
                                                      locale
                                                  )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        const { currentMonth } = this.state;
        const {
            className,
            monthFormat,
            yearFormat,
            dayFormat,
            weekStartsOn,
            locale,
            minDate,
            maxDate
        } = this.props;

        let calendarClassNames = classNames(
            'calendar',
            typeof className !== 'undefined' ? className : null
        );

        return (
            <div className={calendarClassNames}>
                <CalendarHeader
                    month={currentMonth}
                    prevMonth={this.prevMonth}
                    nextMonth={this.nextMonth}
                    monthFormat={monthFormat}
                    yearFormat={yearFormat}
                    dayFormat={dayFormat}
                    weekStartsOn={weekStartsOn}
                    locale={locale}
                    minDate={minDate}
                    maxDate={maxDate}
                />
                {this.renderBody()}
            </div>
        );
    }
}

export default Calendar;
