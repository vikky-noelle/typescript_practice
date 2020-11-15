export interface ICart {
    add(name: string): boolean | string | undefined;
    get(id: number): product | undefined;
    getAll(): product[];
    update(id: number, name: string): boolean;
    remove(id: number): boolean;
    removeAll(): void | string;
    count(): number;
};

interface product {
    id: number,
    name: string
}
var idCounter = 1;

export class Cart implements ICart {
    private productArray: product[] = [];

    public add(name: string): boolean | string | undefined {
        try {
            if (name.length <= 0)
                throw undefined;
            else if (!isNaN(+name))
                throw "Name only contains number";
            else {
                this.productArray.push({
                    id: idCounter,
                    name: name
                });
                idCounter += 1;
                return true;
            }
        }
        catch (e) {
            return e;
        }

    }

    public update(id: number, name: string): boolean {
        if (name.length > 0)
            try {
                for (var i in this.productArray) {
                    if (this.productArray[i].id == id) {
                        this.productArray[i].name = name;
                    }
                }
                return true;
            }
            catch (e) {
                return false;
            }
        else
            return false;
    }

    public get(id: number): product | undefined {
        for (var i in this.productArray) {
            if (this.productArray[i].id == id) {
                return this.productArray[i];
            }
        }
        return undefined;
    }

    public getAll(): product[] {
        return this.productArray;
    }

    public remove(id: number): boolean {
        try {
            let tempArray = [];
            for (var i in this.productArray) {
                if (this.productArray[i].id != id) {
                    tempArray.push(this.productArray[i]);
                }
            }
            if (this.productArray.length == tempArray.length)
                return false;
            this.productArray = tempArray;
            return true;
        }
        catch (e) {
            return false;
        }
    }

    public removeAll(): void | string {
        try {
            if (this.productArray.length == 0)
                throw "empty list";
            this.productArray = [];
        }
        catch (e) {
            return e;
        }
    }

    public count(): number {
        return this.productArray.length;
    }
}