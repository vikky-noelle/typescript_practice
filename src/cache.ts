import NodeCache from "node-cache";
import { EventEmitter } from "events";

export class Cache {

    myCache = new NodeCache();
    event;
    locked: boolean;
    constructor() {
        this.locked = false;
        this.event = new EventEmitter();
        this.myCache.set(0, 0);
        this.myCache.set(1, 1);
    }

    private acquire() {
        return new Promise(resolve => {
            if (!this.locked) {
                this.locked = true;
                return resolve();
            }

            const tryAcquire = () => {
                if (!this.locked) {
                    this.locked = true;
                    this.event.removeListener('release', tryAcquire);
                    return resolve();
                }
            };
            this.event.on('release', tryAcquire);
        });
    }

    private release() {
        this.locked = false;
        setImmediate(() => this.event.emit('release'));
    }

    // checks if the key exists in cache
    check(key: number): boolean {
        if (this.myCache.has(key)) {
            return true;
        }
        else {
            return false;
        }
    }

    // gets the value of the key from cache
    get(key: number): number {
        const value = this.myCache.get(key) as number | undefined;
        if (!value && value != 0) {
            throw new Error("value not found in cache - " + value);
        }
        return value;
    }

    // sets the key value pair in cache
    async set(key: number, result: number): Promise<void> {
        // if (!this.locked) {
        await this.acquire();
        try {
            await this.myCache.set(key, result);
        }
        finally {
            this.release();
        }
        console.log("cache data " + this.list());
        // }
    }

    // lists all the value in the cache
    list() {
        return this.myCache.keys();
    }
}
