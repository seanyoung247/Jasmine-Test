Calculator = function() {
    this.value = 0;
}

//Adds number passed to value
Calculator.prototype.add = function(number) {
    if (typeof(number)=="number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}

//Subtract number passed from value 
Calculator.prototype.sub = function(number) {
    if (typeof(number)=="number") {
        this.value -= number;
    } else {
        alert("Error!");
    }
}

//Sets value to number passed
Calculator.prototype.set = function(number) {
    if (typeof(number) == "number")
    {
        this.value = number;
    } else {
        alert("Error!");
    }
}

//Sets value to 0
Calculator.prototype.clear = function() {
    this.value = 0;
}