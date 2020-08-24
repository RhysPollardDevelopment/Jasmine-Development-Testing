describe("A fizzbuzz game test", function(){

    beforeEach(function(){
        fizzbuzz =  new fizzBuzz();
    })

    describe("Should return a fizz, buzz, fizzbuzz or number", function(){
        it("should exist", function(){
            expect(fizzbuzz).toBeDefined();
        })
        it("should return error! if not a number", function(){
            var result = fizzBuzz("15");
            expect(result).toBe("Error!");
        })
        it("should return fizzbuzz", function(){
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        })
        it("should return Fizz", function(){
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        })
        it("should return Buzz", function(){
            var result = fizzBuzz(10);
            expect(result).toBe("Buzz");
        })
        it("should return the number 11", function(){
            var result =  fizzBuzz(11);
            expect(result).toBe(11);
        })

    })
})

