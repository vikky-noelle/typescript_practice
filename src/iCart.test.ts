import { Cart } from "./cart";

describe("Testing Icart", function () {

    describe("adding items in the product list", function () {

        it("should not throw any error, after adding one item", function () {
            let obj = new Cart();
            expect(obj.add("Item_one")).toBe(true)
            expect(obj.count()).toBe(1);
        });

        it("should not throw any error, after adding two items", function () {
            let obj = new Cart();
            expect(obj.add("Item_one")).toBe(true)
            expect(obj.add("Item_two")).toBe(true)
            expect(obj.count()).toBe(2);
        });

        it("should not throw any error, after adding two items then deleting and adding one item", function () {
            let obj = new Cart();
            expect(obj.add("Item_one")).toBe(true)
            expect(obj.add("Item_two")).toBe(true)
            expect(obj.add("Item_three")).toBe(true)
            expect(obj.remove(5)).toBe(true);
            expect(obj.add("Item_three_two")).toBe(true);
            expect(obj.count()).toBe(3);
        });

        it("should not throw any error, after passing an empty string", function () {
            let obj = new Cart();
            expect(obj.add("")).toBe(undefined)
            expect(obj.count()).toBe(0);
        });

        it("should not throw any error, after passing a number as string", function () {
            let obj = new Cart();
            expect(obj.add("123")).toBe("Name only contains number");
            expect(obj.count()).toBe(0);
        });
    });

    describe("deleting items from the product list after adding two items", function () {

        it("should not throw any error, deleting one item after adding two", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            obj.remove(9);
            expect(obj.count()).toBe(1);
        });

        it("should not throw any error, deleting one item after adding two", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            expect(obj.remove(155)).toBe(false);
            expect(obj.count()).toBe(2);
        });
    });

    describe("deleting all items from the product list after adding two items", function () {
        it("should not throw any error, after deleting items after adding two", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            obj.removeAll();
            expect(obj.count()).toBe(0);
        });

        it("should not throw any error, after performing removeall even though product list is empty.", function () {
            let obj = new Cart();
            expect(obj.removeAll()).toBe("empty list");
            expect(obj.count()).toBe(0);
        });
    });

    describe("getting a certain item from the list of products", function () {

        it("should not throw any error, after getting one item after adding two", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            expect(obj.get(15)?.name).toBe("Item_two");
        });

        it("should not throw any error, after getting one item after adding two", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            expect(obj.get(17)?.name).toBe("Item_two");
        });
    });

    describe("updating a certain item from the list of products", function () {
        it("should not throw any error,after updating one item after adding two", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            expect(obj.update(19, "updated_item")).toBe(true);
            expect(obj.get(19)?.name).toBe("updated_item");
        });
    });

    describe("getting all the list of products", function () {
        it("should not throw any error, after getting the list", function () {
            let obj = new Cart();
            obj.add("Item_one");
            obj.add("Item_two");
            expect(obj.getAll().length).toBe(2);
        });
    });
});
