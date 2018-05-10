/* 
 * Problem 20: Factorial digit sum
 * Sum of the digits in the number 100! 
 */

function factorialSum() {
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
    * find the factorial
    */
    _factorial = function(x) {
        if (x == 0) {
            return 1;
        }
        return x * _factorial(x - 1);
    };
    /**
    * digts of sum on factoral number
    */
    _digitsSum = function(number) {
    	console.log("Enter: _digitsSum.");
    	_startTimer("TOTAL_TIME_TAKEN");
        let fact = _factorial(number);
        var sum = 0;
        while (fact) {
            sum = parseInt(sum) + fact % 10;
            fact = fact / 10;
        }
        console.log("Exit: _digitsSum.");
        _endTimer("TOTAL_TIME_TAKEN");
        return sum;
    };
    return {
        digitsSum: _digitsSum
    };
}

let obj = new factorialSum();
console.log("Factorial digits Sum " + obj.digitsSum(100))

// ****************OUTPUT*************
// Enter: _digitsSum.
// Exit: _digitsSum.
// TOTAL_TIME_TAKEN: 1.098ms
// Factorial digits Sum 659