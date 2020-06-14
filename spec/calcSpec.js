describe("Calculator", function() {
    beforeEach(function() {
        calc = new Calculator;
    })

    //describes the tests for the Calculator.add() function
    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });

    //describes the tests for the Calculator.clear() function
    describe("Clear tests", function() {
        it("should clear Calculator.value", function() {
            calc.add(10);
            calc.clear();
            expect(calc.value).toBe(0);
        });
    });
});