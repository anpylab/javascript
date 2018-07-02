let person = function () {
    this.firstName = "Joe";
    this.lastName = "John";
    this.age = 30;
}
person.prototype.county = "IN";
person.prototype = function () {
    getFullnName = function () {
        return firstName + " " + lastName;
    }
    return {
        fullname: getFullnName
    };
}();
console.log(person.prototype.fullname())