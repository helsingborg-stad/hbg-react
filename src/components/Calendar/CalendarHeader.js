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
                    className="grid-auto text-center"
                >
                    <strong>
                        {format(
                            dateFns.addDays(startDate, i),
                            dayFormat,
                            locale
                        )}
                    </strong>
                </div>
            );
        }

        return <div className="grid no-gutter">{days}</div>;
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
            <div className="calendar__header u-pb-4">
                <div className="grid">
                    <div
                        className={classNames(
                            'calendar__prev grid-auto text-left u-flex u-justify-content-start',
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
                    <div className="grid-auto text-center">
                        <h4 className="calendar__month">
                            {format(month, monthFormat, locale)}
                        </h4>
                        <h4 className="calendar__year">
                            {format(month, yearFormat, locale)}
                        </h4>
                    </div>
                    <div
                        className={classNames(
                            'calendar__next grid-auto text-right u-flex u-justify-content-end',
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
                {this.renderWeekDays()}
            </div>
        );
    }
}

export default CalendarHeader;
