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

describe('sortInventory function', () => {
    // positive
    test("sorts items from smallest price to largest price", () => {
        const expectedProducts = [
            {id: 4, name: "Hammer", price: 5},
            {id: 1, name: "Stepstool", price: 15},
            {id: 5, name: "Sledge hammer", price: 20},
            {id: 2, name: "Ladder", price: 50}, 
            {id: 3, name: "Bigger Ladder", price: 100}          
        ];

        const result = unitTest.sortInventory(products, "price");
        expect(result).toEqual(expectedProducts);
    });
    // negative
    test("returns an empty array when key is not a string", () => {
        const result = unitTest.sortInventory(products, products.price);
        expect(result).toEqual([]);
    });
    // edge
    test("returns an empty array when inventory is empty", () => {
        const inventory = [];
        const result = unitTest.sortInventory(inventory, "price");
        expect(result).toEqual([]);
    });
})

// const expectedProducts = [
//             {id: 3, name: "Bigger Ladder", price: 100},
//             {id: 4, name: "Hammer", price: 5},
//             {id: 2, name: "Ladder", price: 50}, 
//             {id: 5, name: "Sledge hammer", price: 20},
//             {id: 1, name: "Stepstool", price: 15}
          
//         ];