function throttling() {
    /**
     * This method helps to avoid making concurrent call.
     */
    _clickSafe = function(callbackFn, waitTime) {
        waitTime = waitTime || 500;
        clearTimeout(callTimeOut);
        callTimeOut = setTimeout(function() {
            callbackFn();
        }, waitTime);
    };
    /**
     * This method helps to avoid making concurrent call.
     */
    _debounce = function(callbackFn, waitTime) {
        waitTime = waitTime || 500;
        setTimeout(function() {
            callbackFn();
        }, waitTime);
    };
    return {
        debounce:_debounce,
        clickSafe:_clickSafe
    }
}
var o = new throttling();
// USAGE
function myFn() {
    console.log("debounce")
}
o.debounce(myFn,1000)