/**
 * Problem 5: Smallest multiple
 * Find the smallest positive number that is evenly divisible by all of the numbers from 1 to 20
 */
function smallestDivisible() {
    let _number = 20; // smallest number range.
    let _incrementer = 20; // step _incrementer

    /**
     *  record the starting time
     */
    _startTimer = function(name) {
        console.time(name);
    };
    /**
     * record the end time 
     */
    _endTimer = function(name) {
        console.timeEnd(name);

    };
    /**
     * The below method continue check the number is divisble by 1..20
     */
    _divisible = function(value) {
        let i = 1;
        while (i < _number) {
            if (value % i == 0) {
                i++
            } else {
                return true;
            }
        }
        return false;
    };
    /* 
    * find the smallest  divisble number 
    */
    _findNumber = function() {
        _startTimer("TOTAL_TIME_TAKEN");
        console.log("Enter: _findNumber method.");
        while (true) {
            if (_divisible(_incrementer)) {
                _incrementer += 20;
            } else {
                console.log("The Smallest multiple number is " + _incrementer);
                break;
            }
        }
        console.log("Exit: _findNumber method.");
        _endTimer("TOTAL_TIME_TAKEN");
    };
    return {
        findSmallestDivisible: _findNumber // The findSmallestDivisible find common smallest divisible number by 1...20 
    };
}
let obj = new smallestDivisible();
console.log(obj.findSmallestDivisible());

// *************OUTPUT*****************
// Enter: _findNumber method.
// The Smallest multiple number is 232792560
// Exit: _findNumber method.
// TOTAL_TIME_TAKEN: 704.195ms