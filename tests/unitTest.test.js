const unitTest = require('../unitTest.js');
const products = [
    {id: 1, name: "Stepstool", price: 15}, 
    {id: 2, name: "Ladder", price: 50}, 
    {id: 3, name: "Bigger Ladder", price: 100}, 
    {id: 4, name: "Hammer", price: 5}, 
    {id: 5, name: "Sledge hammer", price: 20}
]

describe("filterProducts", function(){
    // Positive Test Case
    test("filterProducts returns a filtered list", () => {
        // arrange
        const callback = (product) =>{
            return product.price < 15;
        }
        // act
        // filter products
        const result = unitTest.filterProducts(products, callback);
    
        const expectedProducts =  [
            {id: 4, name: "Hammer", price: 5}
        ];
        // assert (expect)
        expect(result).toEqual(expectedProducts);
    });

    // Negative Test Case
    test("filterProducts returns an empty array", () =>{
        const callback = (product) =>{
            return product.price > 100;
        }
        const result = unitTest.filterProducts(products, callback);
        const expectedProducts = [];
        expect(result).toEqual([]);
    });

    // Edge Test Case
    test("filterProducts returns ", () =>{
        const callback = (product) =>{
            return product.name === "shoes";
        }
        const result = unitTest.filterProducts(products, callback);
        const expectedProducts = [];
        expect(result).toEqual([]);
    });
})


describe('calculateDiscount function', () => {
    // positive
    test("applies a valid discount rate", () => {
        expect(unitTest.calculateDiscount(100, 0.1)).toBe(90);
    });
    // negative
    test("handles an invalid discount rate gracefully", () => {
        expect(unitTest.calculateDiscount(100,  -0.1)).toBe(null);
    });
    // edge
    test("handles edge case with price of 0", () => {
        expect(unitTest.calculateDiscount(0, 0.2)).toBe(0);
    });
})



