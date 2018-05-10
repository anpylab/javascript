/**
 * 
 * @param {*} fn 
 * @param {*} time 
 */
const debounce = (fn, time) => {
    let timeout;
    return function () {
        const callFun = () => fn.apply(this, arguments);

        clearTimeout(timeout);
        timeout = setTimeout(callFun, time);
    }
}