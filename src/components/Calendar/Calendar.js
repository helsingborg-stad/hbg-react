import PropTypes from 'prop-types';
import React, { Component } from 'react';
import dateFns from 'date-fns';
import { getCalendarDatesByMonth, format } from '../../helper/dateFns.js';
import CalendarHeader from './CalendarHeader.js';
import classNames from 'classnames';

class Calendar extends Component {
    static propTypes = {
        /** @type {array} [description] */
        events: PropTypes.arrayOf(
            PropTypes.shape({
                /** @type {string} Title of the event, which will be used as content */
                title: PropTypes.string.isRequired,
                /** @type {Date Object} Start date of the event */
                start: PropTypes.instanceOf(Date).isRequired,
                /** @type {Date Object} End date of the event, cannot be before start date */
                stop: PropTypes.instanceOf(Date).isRequired
            })
        ),
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
        dateClassName: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.func
        ]),
        /** @type {string/array/function} Used to add a class name to events, can be either string, array of string or function eg. (event) => {return 'custom-class'} */
        eventClassName: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.func
        ]),
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
        weekStartsOn: 'monday',
        locale: 'en'
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

    /**
     * Navigates to the next month, fires when clicking on next button
     * @return {void}
     */
    nextMonth(e) {
        e.preventDefault();
        const { maxDate, onChangeMonth } = this.props;
        const { currentMonth } = this.state;

        if (typeof maxDate !== 'undefined' && dateFns.isSameMonth(maxDate, currentMonth)) {
            return;
        }

        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });

        if (typeof onChangeMonth === 'function') {
            onChangeMonth(this.state.currentMonth);
        }
    }

    /**
     * Navigates to the previous month, fires when clicking on prev button
     * @return {void}
     */
    prevMonth(e) {
        e.preventDefault();
        const { minDate, onChangeMonth } = this.props;
        const { currentMonth } = this.state;

        if (typeof minDate !== 'undefined' && dateFns.isSameMonth(minDate, currentMonth)) {
            return;
        }

        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });

        if (typeof onChangeMonth === 'function') {
            onChangeMonth(this.state.currentMonth);
        }
    }

    /**
     * Generates an array of rows for each event. Specifies width & offset for each event which is used when rendering each event.
     * @param  {array} events               Array of events
     * @param  {Date Object} firstDayOfWeek First day of the week
     * @param  {Date Object} lastDayOfWeek  Last day of the week
     * @return {array}                      Array containg event rows
     */
    generateEventRows(events, firstDayOfWeek, lastDayOfWeek) {
        let eventRows = [];

        if (events.length <= 0) {
            return eventRows;
        }

        events.forEach(event => {
            if (dateFns.isBefore(event.stop, event.start)) {
                throw new Error('The stop date of an event cannot be earlier then the start date.');
            }

            if (
                !dateFns.isWithinRange(firstDayOfWeek, event.start, event.stop) &&
                !dateFns.isWithinRange(lastDayOfWeek, event.start, event.stop) &&
                !dateFns.isWithinRange(event.start, firstDayOfWeek, lastDayOfWeek)
            ) {
                return;
            }

            const startDate = dateFns.isBefore(event.start, firstDayOfWeek)
                ? firstDayOfWeek
                : event.start;

            const stopDate = dateFns.isAfter(event.stop, lastDayOfWeek)
                ? lastDayOfWeek
                : event.stop;

            const width = dateFns.differenceInCalendarDays(stopDate, startDate) + 1;

            const offset = dateFns.differenceInCalendarDays(startDate, firstDayOfWeek);

            eventRows.push({
                event: event,
                width: width,
                offset: offset,
                startsThisWeek: startDate === event.start,
                endsThisWeek: stopDate === event.stop
            });
        });

        return eventRows;
    }

    /**
     * Renders the Calendar body
     * @return {React Component}
     */
    renderBody() {
        const { currentMonth } = this.state;

        const {
            onClickDate,
            onClickEvent,
            dateClassName,
            eventClassName,
            dateContent,
            eventContent,
            dateFormat,
            locale,
            events
        } = this.props;

        const weeks = getCalendarDatesByMonth(currentMonth).map((days, index) => {
            const eventRows =
                typeof events !== 'undefined' && events.length > 0
                    ? this.generateEventRows(events, days[0], days[6])
                    : [];

            return (
                <div
                    key={
                        format(days[0], 'DMYYYY', locale) + '--' + format(days[6], 'DMYYYY', locale)
                    }
                    className="calendar__week"
                >
                    {/* Background row */}
                    <div className="calendar__row calendar__row--bg calendar__row--float">
                        {days.map(date => {
                            return (
                                <div
                                    key={format('background--' + date, 'D-M-YYYY', locale)}
                                    className={classNames('calendar__cell', 'calendar__cell--bg', {
                                        'is-off-range': !dateFns.isSameMonth(date, currentMonth)
                                    })}
                                >
                                    {}
                                </div>
                            );
                        })}
                    </div>

                    {/* Date row */}
                    <div className="calendar__row calendar__row--date calendar__row--float">
                        {days.map(date => {
                            return (
                                <div
                                    key={format('date--' + date, 'D-M-YYYY', locale)}
                                    className={classNames('calendar__cell', {
                                        'is-off-range': !dateFns.isSameMonth(date, currentMonth)
                                    })}
                                >
                                    {/* Date wrapper */}
                                    <div
                                        className={classNames(
                                            'calendar__date',
                                            typeof dateClassName !== 'undefined'
                                                ? typeof dateClassName === 'function'
                                                    ? dateClassName(date)
                                                    : dateClassName
                                                : null
                                        )}
                                        onClick={
                                            typeof onClickDate === 'function'
                                                ? () => {
                                                      onClickDate(date);
                                                  }
                                                : null
                                        }
                                    >
                                        {/* Date content */}
                                        {typeof dateContent === 'function'
                                            ? dateContent(format(date, dateFormat, locale), date)
                                            : format(date, dateFormat)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Events row */}
                    {eventRows.length > 0 &&
                        eventRows.map((row, index) => {
                            const { event, width, offset, startsThisWeek, endsThisWeek } = row;
                            const { title } = event;

                            return (
                                <div
                                    className="calendar__row calendar__row--event"
                                    key={'event-row-' + index}
                                >
                                    <div
                                        className={classNames('calendar__cell', {
                                            [`calendar__cell--${width}`]: true,
                                            [`calendar__cell--offset-${offset}`]: offset > 0
                                        })}
                                    >
                                        {/* Event wrapper */}
                                        <div
                                            className={classNames(
                                                'calendar__event',
                                                {
                                                    'calendar__event--extend-left': !startsThisWeek,
                                                    'calendar__event--extend-right': !endsThisWeek
                                                },
                                                typeof eventClassName !== 'undefined'
                                                    ? typeof eventClassName === 'function'
                                                        ? eventClassName(event)
                                                        : eventClassName
                                                    : null
                                            )}
                                            onClick={
                                                typeof onClickEvent === 'function'
                                                    ? () => {
                                                          onClickEvent(event);
                                                      }
                                                    : null
                                            }
                                        >
                                            {/* Event content */}
                                            {typeof eventContent === 'function'
                                                ? eventContent(event)
                                                : title}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            );
        });
        return <div className="calendar__body">{weeks}</div>;
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

        return (
            <div
                className={classNames(
                    'calendar',
                    typeof className !== 'undefined' ? className : null
                )}
            >
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
