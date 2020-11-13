export interface ICart {
    add(name: String): boolean | String;
    get(id: number): object | undefined;
    getAll(): object[];
    update(id: number, name: String): boolean;
    remove(id: number): boolean;
    removeAll(): void;
    count(): number;
};

var idCounter = 1;

export class Cart implements ICart {
    private productArray: { id: number, name: String }[] = [];

    public add(name: String): boolean | String {
        try {
            this.productArray.push({
                id: idCounter,
                name: name
            });
            idCounter += 1;
            return true;
        }
        catch (e) {
            return e;
        }
    }

    public update(id: number, name: String): boolean {
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
    }

    public get(id: number): object | undefined {
        for (var i in this.productArray) {
            if (this.productArray[i].id == id) {
                return this.productArray[i];
            }
        }
        return undefined;
    }

    public getAll(): object[] {
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
            this.productArray = tempArray;
            return true;
        }
        catch (e) {
            return false;
        }
    }

    public removeAll(): void {
        this.productArray = [];
    }

    public count(): number {
        return this.productArray.length;
    }
}