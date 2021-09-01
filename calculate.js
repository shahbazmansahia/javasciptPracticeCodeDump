function calc (a, b, oper){
    switch (oper){
        case '+':
            return console.log("Addition: " + (a + b));
            break;
        
        case '-':
            return console.log("Subtraction: " + (a - b));
            break;
        
        case '/':
            return console.log ("Divide: " + (a / b));
            break;

        case '*':
            return console.log ("Multiplication: " + (a * b));
            break;

        default:
            return console.log ("Invalid Operator!");
            break;
    }
}

calc (2, 10, '-');