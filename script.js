let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

// Convert the NodeList of buttons to an array
let arr = Array.from(buttons); // Corrected variable

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Evaluate the mathematical expression
                input.value = string;
            } catch {
                input.value = "Error"; // Handle invalid expressions
                string = ""; // Reset string
            }
        } else if (e.target.innerHTML === 'AC') {
            string = ""; // Clear input
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1); // Delete last character
            input.value = string;
        } else {
            string += e.target.innerHTML; // Append button value to the string
            input.value = string;
        }
    });
});
