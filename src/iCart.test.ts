import { Cart } from "./cart";

describe("Testing Icart", function () {

    describe("adding items", function () {
        it("should not throw any error, adding one item", function () {
            let obj = new Cart();
            expect(obj.add("Item_one")).toBe(true)
            expect(obj.count()).toBe(1);
        });
        it("should not throw any error, adding two items", function () {
            let obj = new Cart();
            expect(obj.add("Item_one")).toBe(true)
            expect(obj.add("Item_two")).toBe(true)
            expect(obj.count()).toBe(2);
        });
    });

    describe("deleting items", function () {
        it("should not throw any error, deleting one item after adding two", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            obj.remove(5);
            expect(obj.count()).toBe(1);
        });
    });

    describe("deleting all items", function () {
        it("should not throw any error, deleting adding two", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            obj.removeAll();
            expect(obj.count()).toBe(0);
        });
    });

    describe("get a certain items", function () {
        it("should not throw any error, getting one item after adding two", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            let object = { id: 8, name: "item_one" };
            expect(obj.get(8)).toBe(object);
        });
    });
});
