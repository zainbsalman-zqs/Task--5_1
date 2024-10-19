const display = document.getElementById('display');
function calculateResult() {
   display.value = eval(display.value);
   
}
function delet() {
        display.value = display.value.slice(0, -1);
    }
 