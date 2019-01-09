'use strict';

exports.__esModule = true;
exports.format = exports.getCalendarDatesByMonth = exports.dateInArray = undefined;

var _dateFns = require('date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

var _sv = require('date-fns/locale/sv');

var _sv2 = _interopRequireDefault(_sv);

var _en = require('date-fns/locale/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Imported locales from dateFns library
 * @type {Object}
 */
var locales = {
    sv: _sv2.default,
    en: _en2.default
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

    if (!avalibleConditions.includes(condition) || typeof _dateFns2.default[condition] === 'undefined') {
        throw new Error('"' + condition + '" is not a valid condition.');
    }

    if (arrayOfDates.length > 0) {
        for (var i = 0; i <= arrayOfDates.length; i++) {
            if (condition === 'isSameWeek' && _dateFns2.default[condition](date, arrayOfDates[i], {
                weekStartsOn: weekStartsOn
            })) {
                return true;
            }

            if (condition !== 'isSameWeek' && _dateFns2.default[condition](date, arrayOfDates[i])) {
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

    var monthStart = _dateFns2.default.startOfMonth(month);
    var monthEnd = _dateFns2.default.endOfMonth(month);
    var startDate = _dateFns2.default.startOfWeek(monthStart, {
        weekStartsOn: weekStartsOn
    });
    var endDate = _dateFns2.default.endOfWeek(monthEnd, { weekStartsOn: weekStartsOn });

    var weeks = [];

    var days = [];
    var day = startDate;

    while (day <= endDate) {
        for (var i = 0; i < 7; i++) {
            days.push(new Date(day));
            day = _dateFns2.default.addDays(day, 1);
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

    return _dateFns2.default.format(date, formatStr, {
        locale: locales[locale] // or global.__localeId__
    });
};

exports.dateInArray = dateInArray;
exports.getCalendarDatesByMonth = getCalendarDatesByMonth;
exports.format = format;