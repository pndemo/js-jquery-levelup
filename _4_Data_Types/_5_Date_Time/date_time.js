/*
The Date object stores the date, time and provides methods for date/time management. For instance,
we can use it to store creation/modification times, to measure time, or just to print out the
current date. To create a new Date object call new Date() with one of the following arguments:
*/

// Without arguments – create a Date object for the current date and time.
let now = new Date();
alert( now ); // shows current date/time

/*
If there is a single argument, and it’s a string, then it is parsed with the format below. The time
portion of the date is assumed to be midnight GMT and is adjusted according to the timezone the code
is run in.
*/
let date = new Date("2017-01-26");
alert(date);

/*
To create the date with the given components in the local time zone. Only two first arguments are
obligatory. Format:

new Date(year, month, date, hours, minutes, seconds, ms)

1) The year must have 4 digits: 2013 is okay, 98 is not.
2) The month count starts with 0 (Jan), up to 11 (Dec).
3) The date parameter is actually the day of month, if absent then 1 is assumed.
4) If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
*/
new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

/*
There are many methods to access the year, month and so on from the Date object. But they can be
easily remembered when categorized.

1) getFullYear() - Get the year (4 digits)
2) getMonth() - Get the month, from 0 to 11.
3) getDate() - Get the day of month, from 1 to 31.
4) getHours(), getMinutes(), getSeconds(), getMilliseconds() - Get the corresponding time
components.
5) getDay() - Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday,
in some countries that’s not so, but can’t be changed.
getTime() - Returns the timestamp for the date – a number of milliseconds passed from the January
1st of 1970 UTC+0.
6) getTimezoneOffset() - Returns the difference between the local time zone and UTC, in minutes.

The following methods allow to set date/time components:

1) setFullYear(year [, month, date])
2) setMonth(month [, date])
3) setDate(date)
4) setHours(hour [, min, sec, ms])
5) setMinutes(min [, sec, ms])
6) setSeconds(sec [, ms])
7) setMilliseconds(ms)
8) setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/

/*
The method Date.parse(str) can read a date from a string. The string format should be:
YYYY-MM-DDTHH:mm:ss.sssZ, where:

1) YYYY-MM-DD – is the date: year-month-day.
2) The character "T" is used as the delimiter.
3) HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
4) The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z that would
mean UTC+0.
*/
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (timestamp)
