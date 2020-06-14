function whatCanIDrink(age) {
    var ret = "This is impossible!"
    if (typeof(age) != "number" || age < 0) {
        ret = "Sorry. I can’t tell what drink because that age is incorrect!"
    } else if (age >= 0 && age < 14) {
        ret = "Drink Toddy";
    } else if (age >= 14 && age < 18) {
        ret = "Drink Coke";
    } else if (age >= 18 && age < 21) {
        ret = "Drink Beer";
    } else if (age >= 21 && age < 130) {
        ret = "Drink Whisky";
    } else {
        //Catch all, should happen, but that doesn't mean it won't...
        ret = "Sorry. I can’t tell what drink because that age is incorrect!"
    }
    return ret;
}