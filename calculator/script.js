// Function to perform calculation
function calculate(operator) {
    // Get input values
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Perform calculation based on operator
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Cannot divide by zero!";
            } else {
                result = num1 / num2;
            }
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            result = "Invalid Operation";
    }

    // Display result
    document.getElementById("result").innerHTML = "Result: " + result;
}
