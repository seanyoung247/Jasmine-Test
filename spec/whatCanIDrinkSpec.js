describe("whatCanIDrink", function() {
    //age is less than 0
    it("should return: \"Sorry. I can’t tell what drink because that age is incorrect!\"", function() {
        expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });

    //age is less than 14 (top extent)
    it ("should return: \"Drink Toddy\"", function() {
        expect(whatCanIDrink(13)).toBe("Drink Toddy");
    });
    //age is less than 14 (bottom extent)
    it ("should return: \"Drink Toddy\"", function() {
        expect(whatCanIDrink(0)).toBe("Drink Toddy");
    });

    //age is less than 18 (top extent)
    //age is less than 18 (bottom extent)

    //age is less than 21 (top extent)
    //age is less than 21 (bottom extent)

    //age is less than 130 (top extent)
    //age is less than 130 (bottom extent)

    //non number input
    it("should return: \"Sorry. I can’t tell what drink because that age is incorrect!\"", function() {
        expect(whatCanIDrink("Older than you")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });

    //No input
    it("should return: \"Sorry. I can’t tell what drink because that age is incorrect!\"", function() {
        expect(whatCanIDrink()).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });

});