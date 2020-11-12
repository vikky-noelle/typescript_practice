export interface ICart {
    add(product: Product): void;
    get(id: string): Product | undefined;
    getAll(): Product[];
    update(id: string, product: Product): void;
    remove(id: string): void;
    removeAll(): void;
    count(): number;
};

var idCounter = 1;

export class Cart implements ICart {
    private productMap: Map<string, Product> = new Map();

    public add(product: Product): void {
        this.productMap.set(product.id, product);
    }

    public update(id: string, product: Product): void {
        this.productMap.set(id, product);
    }

    public get(id: string): Product | undefined {
        return this.productMap.get(id);
    }

    public getAll(): Product[] {
        return Array.from(this.productMap.values());
    }

    public remove(id: string): void {
        this.productMap.delete(id);
    }

    public removeAll(): void {
        this.productMap.clear();
    }

    public count(): number {
        return this.productMap.size;
    }
}

export interface IProduct {
    _name: String,
    _id: String,
    _price: number
};

export class Product implements IProduct {
    _name;
    _id;
    _price;


    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
        this._id = idCounter.toString();
        idCounter += 1;
    }

    public get name(): string {
        return this._name;
    }

    public get id(): string {
        return this._id;
    }
    public get price(): number {
        return this._price;
    }
}