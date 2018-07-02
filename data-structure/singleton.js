let singleton = (function () {
    let instance = null;

    function singletonClass() {

    }
    return function () {
        if (instance == null) {
            instance = new singletonClass();
        }
        return instance;

    }
})();

let ob1 = new singleton();
let ob2 = new singleton();
console.log(ob1 == ob2); // true