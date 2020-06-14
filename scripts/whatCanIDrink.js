function whatCanIDrink(age) {
    var ret = "This is impossible!"
    if (typeof(age) != "number" || age < 0) {
        ret = "Sorry. I can’t tell what drink because that age is incorrect!"
    } else if (age < 14) {
        ret = "Drink Toddy";
    }
    return ret;
}