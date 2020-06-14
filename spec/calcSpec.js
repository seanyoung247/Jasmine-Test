describe("Calculator", function() {
    beforeEach(function() {
        calc = new Calculator;
    })

    //describes the tests for the Calculator.add() function
    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.set(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.set(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });

    //describes the tests for the Calculator.sub() function
    describe("Subtration tests", function() {
        //correct return if minuend is greater than subtrahend
        it("should return 5", function() {
            calc.set(10);
            calc.sub(5);
            expect(calc.value).toBe(5);
        });
        //correct return if minuend and subtrahend are equal
        it("should return 0", function() {
            calc.set(5);
            calc.sub(5);
            expect(calc.value).toBe(0);
        });
        //correct return if minuend is smaller than subtrahend
        it("should return -5", function() {
            calc.set(5);
            calc.sub(10);
            expect(calc.value).toBe(-5);
        });
        //non-number parameters
        it("should return an error if we don't supply numbers", function() {
            spyOn(window, "alert");
            calc.sub("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    //describes the tests for the Calculator.multiply() function
    describe("multiplication tests", function() {
        //correct return if multiplying by 0 number
        it("should return 0", function() {
            calc.multiply(5);
            expect(calc.value).toBe(0);
        });
        //correct return if multiplying number by 0
        it("should return 0", function() {
            calc.set(5);
            calc.multiply(0);
            expect(calc.value).toBe(0);
        });
        //correct return if multiplying two positive numbers
        it("should return 30", function() {
            calc.set(5);
            calc.multiply(6);
            expect(calc.value).toBe(30);
        });
        //correct return if multiplying a positive and negative number
        it("should return -30", function() {
            calc.set(5);
            calc.multiply(-6);
            expect(calc.value).toBe(-30);
        });
        //correct return if multiplying two negative numbers
        it("should return 30", function() {
            calc.set(-5);
            calc.multiply(-6);
            expect(calc.value).toBe(30);
        });
        //non-number parameters
        it("should return an error if we don't supply numbers", function() {
            spyOn(window, "alert");
            calc.multiply("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    //describes the tests for the Calculator.divide() function

    //describes the tests for the Calculator.clear() function
    describe("Clear tests", function() {
        it("should clear Calculator.value", function() {
            calc.add(10);
            calc.clear();
            expect(calc.value).toBe(0);
        });
    });

    //describes the tests for the Calculator.Set() function
    describe("Set tests", function() {
        it("should be 5", function() {
            calc.set(5);
            expect(calc.value).toBe(5);
        });
        //non-number parameters
        it("should return an error if we don't supply numbers", function() {
            spyOn(window, "alert");
            calc.set("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});