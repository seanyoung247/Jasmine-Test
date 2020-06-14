describe("whatCanIDrink", function() {
    //age is less than 0
    
    it("should return: \"Sorry. I can’t tell what drink because that age is incorrect!\"", function() {
        expect(whatCanIDrink(-4)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });
    //age is less than 14
    //age is less than 18
    //age is less than 21
    //age is less than 30
    //non number input
    it("should return: \"Sorry. I can’t tell what drink because that age is incorrect!\"", function() {
        expect(whatCanIDrink("Older than you")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });
});