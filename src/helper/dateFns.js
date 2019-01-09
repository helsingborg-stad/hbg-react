import dateFns from 'date-fns';
import sv from 'date-fns/locale/sv';
import en from 'date-fns/locale/en';

/**
 * Imported locales from dateFns library
 * @type {Object}
 */
const locales = {
    sv: sv,
    en: en
};

/**
 * dateInArray()
 *
 * Compares a date with an array of dates with a condition. Returns true if the condition is met once.
 *
 * @param {date object} date - Date to compare with array
 * @param {array} arrayOfDates - Array containing date objects
 * @param {string} condition - The method name to use when comparing dates (isSameDay/isSameWeek/isSameMonth/isSameYear)
 * @param {int} weekStartsOn - Sets the first day of the week, defaults to 1 which represents monday as first day of week.
 * @return boolean
 */
const dateInArray = (date, arrayOfDates, condition, weekStartsOn = 1) => {
    const avalibleConditions = [
        'isSameDay',
        'isSameWeek',
        'isSameMonth',
        'isSameYear'
    ];

    if (
        !avalibleConditions.includes(condition) ||
        typeof dateFns[condition] === 'undefined'
    ) {
        throw new Error('"' + condition + '" is not a valid condition.');
    }

    if (arrayOfDates.length > 0) {
        for (let i = 0; i <= arrayOfDates.length; i++) {
            if (
                condition === 'isSameWeek' &&
                dateFns[condition](date, arrayOfDates[i], {
                    weekStartsOn: weekStartsOn
                })
            ) {
                return true;
            }

            if (
                condition !== 'isSameWeek' &&
                dateFns[condition](date, arrayOfDates[i])
            ) {
                return true;
            }
        }
    }

    return false;
};

/**
 * getCalendarDatesByMonth()
 *
 * @return array
 */
const getCalendarDatesByMonth = (month, weekStartsOn = 1) => {
    const monthStart = dateFns.startOfMonth(month);
    const monthEnd = dateFns.endOfMonth(month);
    const startDate = dateFns.startOfWeek(monthStart, {
        weekStartsOn: weekStartsOn
    });
    const endDate = dateFns.endOfWeek(monthEnd, { weekStartsOn: weekStartsOn });

    const weeks = [];

    let days = [];
    let day = startDate;

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            days.push(new Date(day));
            day = dateFns.addDays(day, 1);
        }

        weeks.push(days);

        //Reset days
        days = [];
    }

    return weeks;
};

/**
 * Helper function for formatting date using dateFns with locale
 * @param  {Date Object} date      The date to format
 * @param  {String} formatStr Date format
 * @param  {String} locale    Language code (sv, en etc)
 *
 * @return {String}           Formatted date
 */
const format = (date, formatStr, locale = 'sv') => {
    return dateFns.format(date, formatStr, {
        locale: locales[locale] // or global.__localeId__
    });
};

export { dateInArray, getCalendarDatesByMonth, format };
