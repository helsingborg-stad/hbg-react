import dateFns from 'date-fns';
import sv from 'date-fns/locale/sv';
import en from 'date-fns/locale/en';

/**
 * Imported locales from dateFns library
 * @type {Object}
 */
var locales = {
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
var dateInArray = function dateInArray(date, arrayOfDates, condition) {
    var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    var avalibleConditions = ['isSameDay', 'isSameWeek', 'isSameMonth', 'isSameYear'];

    if (!avalibleConditions.includes(condition) || typeof dateFns[condition] === 'undefined') {
        throw new Error('"' + condition + '" is not a valid condition.');
    }

    if (arrayOfDates.length > 0) {
        for (var i = 0; i <= arrayOfDates.length; i++) {
            if (condition === 'isSameWeek' && dateFns[condition](date, arrayOfDates[i], {
                weekStartsOn: weekStartsOn
            })) {
                return true;
            }

            if (condition !== 'isSameWeek' && dateFns[condition](date, arrayOfDates[i])) {
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
var getCalendarDatesByMonth = function getCalendarDatesByMonth(month) {
    var weekStartsOn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var monthStart = dateFns.startOfMonth(month);
    var monthEnd = dateFns.endOfMonth(month);
    var startDate = dateFns.startOfWeek(monthStart, {
        weekStartsOn: weekStartsOn
    });
    var endDate = dateFns.endOfWeek(monthEnd, { weekStartsOn: weekStartsOn });

    var weeks = [];

    var days = [];
    var day = startDate;

    while (day <= endDate) {
        for (var i = 0; i < 7; i++) {
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
var format = function format(date, formatStr) {
    var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sv';

    return dateFns.format(date, formatStr, {
        locale: locales[locale] // or global.__localeId__
    });
};

export { dateInArray, getCalendarDatesByMonth, format };