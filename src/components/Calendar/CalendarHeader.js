import React, { Component } from 'react';
import dateFns from 'date-fns';
import { Button } from '../../index.js';
import PropTypes from 'prop-types';
import { format } from '../../helper/dateFns.js';
import classNames from 'classnames';

class CalendarHeader extends Component {
    static propTypes = {
        month: PropTypes.instanceOf(Date).isRequired,
        minDate: PropTypes.instanceOf(Date),
        maxDate: PropTypes.instanceOf(Date),
        prevMonth: PropTypes.func.isRequired,
        nextMonth: PropTypes.func.isRequired,
        monthFormat: PropTypes.string,
        yearFormat: PropTypes.string,
        dayFormat: PropTypes.string,
        weekStartsOn: PropTypes.oneOf([
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday'
        ]),
        locale: PropTypes.string
    };

    static defaultProps = {
        monthFormat: 'MMMM',
        yearFormat: 'YYYY',
        weekStartsOn: 'monday',
        dayFormat: 'dd'
    };

    renderWeekDays() {
        let { dayFormat, weekStartsOn, locale } = this.props;
        const weekDays = {
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6,
            sunday: 0
        };
        weekStartsOn = weekDays[weekStartsOn];

        const days = [];

        let startDate = dateFns.startOfWeek(new Date(), {
            weekStartsOn: weekStartsOn
        });

        for (let i = 0; i < 7; i++) {
            days.push(
                <div
                    key={format(
                        dateFns.addDays(startDate, i),
                        dayFormat,
                        locale
                    )}
                    className="calendar__cell"
                >
                    <div className="calendar__day">
                        <span>
                            {format(
                                dateFns.addDays(startDate, i),
                                dayFormat,
                                locale
                            )}
                        </span>
                    </div>
                </div>
            );
        }

        return (
            <div className="calendar__row calendar__row--weekdays">{days}</div>
        );
    }

    render() {
        const {
            month,
            prevMonth,
            nextMonth,
            monthFormat,
            yearFormat,
            locale,
            minDate,
            maxDate
        } = this.props;

        return (
            <div className="calendar__header">
                <div className="calendar__row">
                    <div className="calendar__cell">
                        <div
                            className={classNames(
                                'calendar__nav calendar__nav--prev',
                                {
                                    disabled:
                                        typeof minDate !== 'undefined' &&
                                        dateFns.isSameMonth(minDate, month)
                                }
                            )}
                        >
                            <Button color="plain" onClick={prevMonth}>
                                <i className="pricon pricon-angle-left" />
                            </Button>
                        </div>
                    </div>
                    <div className="calendar__cell">
                        <div className="calendar__title">
                            <div className="calendar__month">
                                {format(month, monthFormat, locale)}
                            </div>
                            <div className="calendar__year">
                                {format(month, yearFormat, locale)}
                            </div>
                        </div>
                    </div>
                    <div className="calendar__cell">
                        <div
                            className={classNames(
                                'calendar__nav calendar__nav--next',
                                {
                                    disabled:
                                        typeof maxDate !== 'undefined' &&
                                        dateFns.isSameMonth(maxDate, month)
                                }
                            )}
                        >
                            <Button color="plain" onClick={nextMonth}>
                                <i className="pricon pricon-angle-right" />
                            </Button>
                        </div>
                    </div>
                </div>
                {this.renderWeekDays()}
            </div>
        );
    }
}

export default CalendarHeader;
