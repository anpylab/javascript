    function dateUtil() {
        var callTimeOut;

        /**
         * Return the date of object array between two Dates
         * @return 
         */
        _getDaysBtnTwoDates = function(sDate, eDate) {
            var days = [];
            sDate = _convertStrToDate(sDate);
            eDate = _convertStrToDate(eDate);
            while (sDate <= eDate) {
                days.push(new Date(sDate));
                sDate.setDate(sDate.getDate() + 1);
            }
            return days;
        };
        /**
         * Return the Convert String to Date
         * @return 
         */
        _convertStrToDate = function(strDate) {
            if (strDate instanceof Date) {
                return strDate;
            } else {
                var date = new Date();
                strDate = strDate || new Date();
                if (typeof strDate == "string" && strDate != null && strDate != '') {
                    strDate = strDate.replace(/-/g, ' ');
                    date = new Date(strDate);
                    date.setHours(0, 0, 0, 0);
                    if (date == "Invalid Date") {
                        var d = strDate.split(" ");
                        date = new Date(d[0], d[1] - 1, d[2]);
                        date.setHours(0, 0, 0, 0);
                    }
                }
                return date;
            }
        };
        /**
         * Return the working days between two dates
         * @return 
         */
        _getWeekDays = function(date1, date2) {
            date1 = _convertStrToDate(date1);
            date2 = _convertStrToDate(date2);
            var count = _getDaysCount(date1, date2);
            var days = [];
            if (count > 0) {
                while (date1 <= date2) {
                    var d = new Date(date1).getDay()
                    days.push(d);
                    date1.setDate(date1.getDate() + 1);
                    if (d == 6) break;
                }
            }
            return days;
        };
        /**
         * Return the no of days between two dates
         * @return 
         */
        _getDaysCount = function(d1, d2) {
            var date1 = _convertStrToDate(d1);
            var date2 = _convertStrToDate(d2);
            date1.setHours(0, 0, 0, 0);
            date2.setHours(0, 0, 0, 0);
            var oneDay = 24 * 60 * 60 * 1000;
            var diffDays = parseInt((date2.getTime() - date1.getTime()) / oneDay);
            return diffDays;
        };
        /**
         * This method returns the Week Start and Week end date based on input date
         * @param  
         * @return 
         */
        _getWeek = function(currentDate) {
            //var current = (typeof currentDate == undefined || currentDate == null) ? new Date() : currentDate;
            var current = _convertStrToDate(currentDate);
            var weekstart = current.getDate() - current.getDay();
            var sunday = new Date(current.setDate(weekstart));
            var endDate = sunday.getDate() + 6;
            var saturday = new Date(current.setDate(endDate));
            return [sunday, saturday];
        };
        /**
         * This Date Format method used to display in the UI 
         * @param  
         * @return      
         * */
        _dateFormat = function(dt, format) {
            format = format || 'dd-mm-YYYY';
            dt = _convertStrToDate(dt);
            var fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
            var zeropad = function(number, length) {
                    number = number.toString();
                    length = length || 2;
                    while (number.length < length)
                        number = '0' + number;
                    return number;
                },
                getYear2Digit = function(yr) {
                    var yy = yr.toString();
                    return yy.substr(2, 4);
                },
                getMonthName = function(mon, type) {
                    if (type == "mm") {
                        return fullMonths[mon];
                    } else if (type == "Mmm") {
                        return months[mon];
                    } else {
                        return months[mon].toString().toUpperCase();
                    }
                },
                getDayName = function(dy, type) {
                    if (type == "1") {
                        return fullDays[dy];
                    } else if (type == "2") {
                        return days[dy];
                    } else {
                        return days[dy].toString().toUpperCase();
                    }
                },
                getAmorpm = function(hrs) {
                    return (hrs >= 12 ? 'PM' : 'AM');
                },
                formats = {
                    dd: dt.getDate(), // Date without ZeroPad
                    Dd: zeropad(dt.getDate()), // Date with 0 Pad
                    day: getDayName(dt.getDay(), '1'), // Full Day name
                    Day: getDayName(dt.getDay(), '2'), // Three Digit of Day
                    DAY: getDayName(dt.getDay(), '3'), // Three Digit of CAPS
                    yyYY: getYear2Digit(dt.getFullYear()), // Date last two digit
                    YYYY: dt.getFullYear(), // Date Full Year
                    md: dt.getMonth() + 1, // Month in Digit
                    Md: zeropad(dt.getMonth() + 1), // Month in Digit with 0 Pad
                    mm: getMonthName(dt.getMonth(), 'mm'), // Full Month
                    Mmm: getMonthName(dt.getMonth(), 'Mmm'), // Short month with three Letter
                    MMM: getMonthName(dt.getMonth(), 'MMM'), // Short month in CAPS with three Letter
                    hh: dt.getHours() % 12 || 12, // 12 Hours
                    AMPM: getAmorpm(dt.getHours()), // Returns AM or PM
                    HRS: zeropad(dt.getHours()), // Hours
                    mn: zeropad(dt.getMinutes()), // Minutes
                    sc: zeropad(dt.getSeconds()) //seconds
                },
                pattern = '(' + Object.keys(formats).join(')|(') + ')';
            return format.replace(new RegExp(pattern, 'g'), function(match) {
                return formats[match];
            });
        };
        _dateSort = function(arr) {
            var first = "";
            var last = "";
            var data = arr.sort(function(a, b) {
                var c = _convertStrToDate(a);
                var d = _convertStrToDate(b);
                return c - d;
            });
            if (data.length > 0) {
                first = data[0];
                last = data[data.length - 1];
            }
            return {
                first: first,
                last: last,
                data: data
            };
        };
        var _timerStart = null;
        /**
         * Timer Start
         * @return 
         */
        _startTimer = function() {
            _timerStart = new Date().getTime();
        };
        /**
         * Timer End
         * @return 
         */
        _endTimer = function() {
            var endTime = new Date().getTime();
            var time = endTime - _timerStart;
            return time + " milliseconds.";
        };
        return {
            getDaysBtnTwoDates: _getDaysBtnTwoDates,
            getWeek: _getWeek,
            getWeekDays: _getWeekDays,
            getDaysCount: _getDaysCount,
            dateFormat: _dateFormat,
            dateSort: _dateSort
        };
    }
    var util = new dateUtil();