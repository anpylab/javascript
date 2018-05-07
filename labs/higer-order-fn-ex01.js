/**
 * High order function example
 * @param {*} hf 
 */
function myFunction(hf) {
    console.log("My function call.");
    hf();
}
/**
 * 
 */
myFunction(() => {
    console.log("Higher Order function.");
});