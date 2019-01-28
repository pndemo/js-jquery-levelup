/*
Jasmine is one of the popular JavaScript unit testing frameworks which is capable of testing
synchronous and asynchronous JavaScript code. It is used in BDD (behavior-driven development)
programming which focuses more on the business value than on the technical details.

To use jasmine, download the framework and extract it inside your project folder. Preferably,
Create a separate folder /jasmine for it.

You will get below four folders/files in distribution bundle:

1. /src : contains the JavaScript source files that you want to test
2. /lib : contains the framework files
3. /spec : contains the JavaScript testing files
4. SpecRunner.html : is the test case runner HTML file

Code examples on how jasmine works can be found in the jasmine root folder.
*/


/*
In Jasmine, there are two important terms – suite and spec.

A Jasmine suite is a group of test cases that can be used to test a specific behavior of the
JavaScript code (a JavaScript object or function). This begins with a call to the Jasmine global
function describe with two parameters – first parameter represents the title of the test suite
and second parameter represents a function that implements the test suite.

A Jasmine spec represents a test case inside the test suite. This begins with a call to the Jasmine
global function it with two parameters – first parameter represents the title of the spec and
second parameter represents a function that implements the test case.

In practice, spec contains one or more expectations. Each expectation represents an assertion that
can be either true or false. In order to pass the spec, all of the expectations inside the spec
have to be true. If one or more expectations inside a spec is false, the spec fails.
*/

//This is test suite
describe("Test Suite", function() {
    it("test spec", function() {
        expect( expression ).toEqual(true);
    });
});

/*
For setup and tear down purpose, Jasmine provides two global functions at suite level: beforeEach()
and afterEach().

The beforeEach function is called once before each spec in the describe() in which it is called.

The afterEach function is called once after each spec.

In practice, spec variables (is any) are defined at the top-level scope — the describe block — and
initialization code is moved into a beforeEach function. The afterEach function resets the
variable before continuing. This helps the developers in not to repeat setup and finalization
code for each spec.
*/

/*
Jasmine Matchers:

1. toBe()	passed if the actual value is of the same type and value as that of the expected value.
   It compares with === operator
2. toEqual()	works for simple literals and variables; should work for objects too
3. toMatch()	to check whether a value matches a string or a regular expression
4. toBeDefined()	to ensure that a property or a value is defined
5. toBeUndefined()	to ensure that a property or a value is undefined
6. toBeNull()	to ensure that a property or a value is null.
7. toBeTruthy()	to ensure that a property or a value is true
8. ToBeFalsy()	to ensure that a property or a value is false
9. toContain()	to check whether a string or array contains a substring or an item.
10. toBeLessThan()	for mathematical comparisons of less than
11. toBeGreaterThan()	for mathematical comparisons of greater than
12. toBeCloseTo()	for precision math comparison
13. toThrow()	for testing if a function throws an exception
14. toThrowError()	for testing a specific thrown exception

The Jasmine not keyword can be used with every matcher’s criteria for inverting the result. I.e:

expect(actual).not.toBe(expected);
expect(actual).not.toBeDefined(expected);
*/

/*
For various reasons, you may want to disable suites – for some time. In this case, you need not
to remove the code – rather just add char x in start of describe to make if xdescribe.

These suites and any specs inside them are skipped when run and thus their results will not appear
in the results.
*/
xdescribe("MathUtils", function() {
    //code
});

/*
Jasmine has test double functions called spies. A spy can stub any function and tracks calls to it and
all arguments. A spy only exists in the describe or it block in which it is defined, and will be
removed after each spec. To create a spy on any method, use spyOn(object, 'methodName') call.

There are two matchers toHaveBeenCalled and toHaveBeenCalledWith which should be used with spies.
toHaveBeenCalled matcher will return true if the spy was called; and toHaveBeenCalledWith matcher
will return true if the argument list matches any of the recorded calls to the spy.
*/
describe("MathUtils", function() {
    var calc;
 
    beforeEach(function() {
        calc = new MathUtils();
        spyOn(calc, 'sum');
    });
 
    describe("when calc is used to peform basic math operations", function(){
         
        //Test for sum operation
        it("should be able to calculate sum of 3 and 5", function() {
            //call any method
            calc.sum(3,5);
 
            //verify it got executed
            expect(calc.sum).toHaveBeenCalled();
            expect(calc.sum).toHaveBeenCalledWith(3,5);
        });
 
    });
});
