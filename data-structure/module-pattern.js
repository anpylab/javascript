/**
 * Simple Module Pattern
 */
let myModule = (function () {
    let value = 0;

    function _setValue(val) {
        value = val;
    }

    function _getValue() {
        return value;
    }
    return {
        setValue: _setValue,
        getValue: _getValue,
    };
})();

myModule.setValue(10);
console.log(myModule.getValue());

myModule.setValue(13);
console.log(myModule.getValue());