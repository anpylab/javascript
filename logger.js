  /**  Description: Javascript Logger Implementation    */
  var config = {
      enable: true,
      logLevel: 'INFO,DEBUG,ERROR'
  };
  var isInfo = (config.logLevel.indexOf("INFO") != -1) ? true : false;
  var isDebug = (config.logLevel.indexOf("DEBUG") != -1) ? true : false;
  var isError = (config.logLevel.indexOf("ERROR") != -1) ? true : false;
  var isLog = (typeof console == "object" || "console" in window) ? true : false;
  var _getTime = function() {
      var now = new Date();
      var hour = "0" + now.getHours();
      hour = hour.substring(hour.length - 2);
      var minute = "0" + now.getMinutes();
      minute = minute.substring(minute.length - 2);
      var second = "0" + now.getSeconds();
      second = second.substring(second.length - 2);
      return hour + ":" + minute + ":" + second;
  };
  var _getDate = function() {
      var now = new Date();
      var year = "" + now.getFullYear();
      var month = "0" + (now.getMonth() + 1);
      month = month.substring(month.length - 2);
      var date = "0" + now.getDate();
      date = date.substring(date.length - 2);
      return year + "-" + month + "-" + date;
  };
  _info = function(message) {
      if (isInfo && isLog) {
          console.log("INFO : " + _getDate() + " : " + _getTime() + " : " + message);
      }
  };
  _debug = function(message) {
      if (isDebug && isLog) {
          console.log("DEBUG : " + _getDate() + " : " + _getTime() + " : " + message);
      }
  };
  _error = function(message) {
      if (isError && isLog) {
          console.log("ERROR : " + _getDate() + " : " + _getTime() + " : " + message);
      }
  };
  var log = (function() {
      return {
          info: _info,
          debug: _debug,
          error: _error
      }
  }());

  log.info('Log Info.');
  log.debug('Log Debug.');
  log.error('Log Error.');
