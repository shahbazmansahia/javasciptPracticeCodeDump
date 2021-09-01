/**
 * Gets all the objects with the <button> tag from the index.html and puts them in the 'buttons' array.
 */
const buttons = document.getElementsByTagName("button");


/**
 * It is now RECOMMENDED to first use 'const' to define variables and then
 * use 'let' for usage later (loops, etc.). It prevents issues with data manipulation
 * stemming from the use of loops in code
 */
for (let i = 0; i < buttons.length; i++){   // CHANGED 'i' data type from var -> let! it made the buttons get labelled correctly!
    const button = buttons[i];
    button.addEventListener("click", function(){ // basically triggers an event (the 'function()' defined) when 'click' is performed. 
        alert("Button " + i + " Pressed");
    })
}