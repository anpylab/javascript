let person = function () {
    this.firstName = "Joe";
    this.lastName = "John";
    this.age = 30;
}
person.prototype.county = "IN";
person.prototype = (function () {
    getFullName = function () {
        return "Full Name";
    }
    return {
        fullname: getFullName
    };
})();
console.log(person.prototype.fullname());