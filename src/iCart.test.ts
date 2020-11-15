import { Cart } from "./cart";

describe("Testing Icart", function () {

    describe("adding items in the product list", function () {

        it("should not throw any error, after adding one item", function () {
            let cart = new Cart();
            expect(cart.add("Item_one")).toBe(1)
            expect(cart.count()).toBe(1);
        });

        it("should not throw any error, after adding two items", function () {
            let cart = new Cart();
            expect(cart.add("Item_one")).toBe(2)
            expect(cart.add("Item_two")).toBe(3)
            expect(cart.count()).toBe(2);
        });

        it("should not throw any error, after adding two items then deleting and adding one item", function () {
            let cart = new Cart();
            expect(cart.add("Item_one")).toBe(4)
            expect(cart.add("Item_two")).toBe(5)
            expect(cart.add("Item_three")).toBe(6)
            expect(cart.remove(6)).toBe(true);
            expect(cart.add("Item_three_two")).toBe(7);
            expect(cart.count()).toBe(3);
        });

        it("should not throw any error, after passing an empty string", function () {
            let cart = new Cart();
            expect(cart.add("")).toBe(undefined)
            expect(cart.count()).toBe(0);
        });

        it("should not throw any error, after passing a number as string", function () {
            let cart = new Cart();
            expect(cart.add("123")).toBe("Name only contains number");
            expect(cart.count()).toBe(0);
        });
    });

    describe("deleting items from the product list after adding two items", function () {

        it("should not throw any error, deleting one item after adding two", function () {
            let cart = new Cart();
            cart.add("Item_one");
            cart.add("Item_two");
            cart.remove(9);
            expect(cart.count()).toBe(1);
        });

        it("should not throw any error, deleting one item after adding two", function () {
            let cart = new Cart();
            cart.add("Item_one");
            cart.add("Item_two");
            expect(cart.remove(155)).toBe(false);
            expect(cart.count()).toBe(2);
        });
    });

    describe("deleting all items from the product list after adding two items", function () {
        it("should not throw any error, after deleting items after adding two", function () {
            let cart = new Cart();
            cart.add("Item_one");
            cart.add("Item_two");
            cart.removeAll();
            expect(cart.count()).toBe(0);
        });

        it("should not throw any error, after performing removeall even though product list is empty.", function () {
            let cart = new Cart();
            expect(cart.removeAll()).toBe("empty list");
            expect(cart.count()).toBe(0);
        });
    });

    describe("getting a certain item from the list of products", function () {

        it("should not throw any error, after getting one item after adding two", function () {
            let cart = new Cart();
            cart.add("Item_one");
            cart.add("Item_two");
            expect(cart.get(15)?.name).toBe("Item_two");
        });

        it("should not throw any error, after getting one item after adding two", function () {
            let cart = new Cart();
            cart.add("Item_one");
            cart.add("Item_two");
            expect(cart.get(17)?.name).toBe("Item_two");
        });
    });

    describe("updating a certain item from the list of products", function () {
        it("should not throw any error,after updating one item after adding two", function () {
            let cart = new Cart();
            cart.add("Item_one");
            cart.add("Item_two");
            expect(cart.update(19, "updated_item")).toBe(true);
            expect(cart.get(19)?.name).toBe("updated_item");
        });
    });

    describe("getting all the list of products", function () {
        it("should not throw any error, after getting the list", function () {
            let cart = new Cart();
            cart.add("Item_one");
            cart.add("Item_two");
            expect(cart.getAll().length).toBe(2);
        });
    });
});
