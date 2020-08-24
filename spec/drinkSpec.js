describe("whatCanIDrink function test", function(){

    beforeEach(function(){
        drink = new whatCanIDrink();
    })

    describe("Drinking Age tests", function(){

        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        })
        it("Should return drink toddy when called as whatCanIDrink(13)", function(){
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        })
        it("Should return drink toddy when called as whatCanIDrink(17)", function(){
            var result = whatCanIDrink(17);
            expect(result).toBe("Drink Coke");
        })
        it("Should return drink beer when called as whatCanIDrink(20)", function(){
            var result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        })
        it("Should return drink whisky when called as whatCanIDrink(13)", function(){
            var result = whatCanIDrink(30);
            expect(result).toBe("Drink Whisky");
        })
        it("Should return Sorry. I can't tell what drink because that age is incorrect when called as whatCanIDrink(-1)", function(){
            var result = whatCanIDrink(-1);
            expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        })
        it("Should return Sorry. I can't tell what drink because that age is incorrect when called as whatCanIDrink(140)", function(){
            var result = whatCanIDrink(140);
            expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        })
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    })
})