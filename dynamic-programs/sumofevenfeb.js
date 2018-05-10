/*
 * Problem 2: Even Fibonacci numbers
 * sum of the even-valued terms of Fibonacci sequence
 */
function evenFebSum() {
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
    * calcuate the sum of even Fibonacci sequence 
    */
    _sum = function(number) {
        _startTimer("TOTAL_TIME_TAKEN");
        console.log("Enter: _sum method.");
        let a = 0,
            b = 1;
        let c = a + b;
        let sumeven = 0;
        while (c < number) {
            a = b;
            b = c;
            c = a + b;
            if (c % 2 == 0) {
                sumeven += c;
            }
        }
        console.log("Exit: _sum method.");
        _endTimer("TOTAL_TIME_TAKEN");
        return sumeven;
    };

    return {
        sumOfEvenSum: _sum
    };
}
let obj = new evenFebSum();
console.log("Even Fibanacci series sum is " + obj.sumOfEvenSum(4000000));
// ******* OUTPUT ***********
// Enter: _sum method.
// Exit: _sum method.
// TOTAL_TIME_TAKEN: 2.159ms
// Even Fibanacci series sum is 4613732