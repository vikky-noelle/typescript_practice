import { Cart, Product } from "./cart";

describe("add functionality", function () {
    describe("making an object for testing", function () {
        let productOne = new Product("Item_one", 10);
        let productTwo = new Product("Item_two", 20);

        let obj = new Cart();
        obj.add(productOne);
        obj.add(productTwo);
        it("should not throw any error", function () {
            expect(obj.count()).toBe(2);
        });
    });
});

describe("remove functionality", function () {
    describe("making an object for testing", function () {
        let productOne = new Product("Item_one", 10);
        let productTwo = new Product("Item_two", 20);

        let obj = new Cart();
        obj.add(productOne);
        obj.add(productTwo);
        console.log(obj.getAll());
        obj.remove("4");
        it("should not throw any error", function () {
            expect(obj.count()).toBe(1);
        });
        // obj.removeAll();
        // it("should not throw any error", function () {
        //     expect(obj.count()).toBe(0);
        // });
    });
});