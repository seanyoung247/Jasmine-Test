describe("fizzBuzz", function() {
    it("should exist", function() {
        expect(fizzBuzz).toBeDefined();
    });

    //Divisible by 3
    it("should return: \"Fizz\"", function() {
        //6 is divisible by 3 but not 5
        expect(fizzBuzz(6)).toBe("Fizz");
    });

    //Divisible by 5
    it("should return: \"Buzz\"", function() {
        //10 is divisible by 5 but not 3
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    //Divisible by 3 and 5
    it("should return: \"FizzBuzz\"", function() {
        //20 is divisible by both 3 and 5
        expect(fizzBuzz(20)).toBe("FizzBuzz");
    });

    //Not Divisible by 3 or 5
    it("should return: 4", function() {
        //4 is divisible by both 3 and 5
        expect(fizzBuzz(4)).toBe(4);
    });

    //Incorrect input
    it("should throw error \"incorrect input!\"", function() {
        expect(fizzBuzz("Furball")).toThrow("incorrect input!");
    });

    //No Input
    it("should throw error \"incorrect input!\"", function() {
        expect(fizzBuzz()).toThrow("incorrect input!");
    });
});