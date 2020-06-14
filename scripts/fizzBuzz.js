function fizzBuzz(number) {
    if (typeof(number) == "number") {
        var ret = "";
        if (number % 3 == 0) {
            ret = "Fizz";
        }
        if (number % 5 == 0) {
            ret += "Buzz";
        } else if (ret != "Fizz") {
            return number;
        }
        return ret;
    } else {
        throw new Error("incorrect input!");
    }
    return "error";
}