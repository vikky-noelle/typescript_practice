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
    private readonly productArray: product[] = [];

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
            let count = false;
            for (var i in this.productArray) {
                // console.log(this.productArray[i]);
                if (this.productArray[i].id == id) {
                    this.productArray.splice(+i, 1);
                    count = true;
                    break;
                }
            }
            // console.log(count);
            if (!count)
                return false;
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
            this.productArray.splice(0, this.productArray.length);
        }
        catch (e) {
            return e;
        }
    }

    public count(): number {
        return this.productArray.length;
    }
}