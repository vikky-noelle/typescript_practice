import { Tedis } from "tedis";
import { EventEmitter } from "events";

export class RedisCache {

    event;
    locked: boolean;
    client;

    constructor() {
        this.locked = false;
        this.client = new Tedis({
            port: 6379,
            host: "127.0.0.1"
        });
        this.client.on("connect", function () {
            console.log("connected");
        });
        this.client.on("close", function () {
            console.log("closed");
        });
        this.event = new EventEmitter();
        this.client.set("0", "0");
        this.client.set("1", "1");
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
    async check(key: number): Promise<number> {
        const value = await this.client.exists(String(key));
        return value;
    }

    // gets the value of the key from cache
    async get(key: number): Promise<number> {
        const value = await this.client.get(String(key)) as number | undefined | null;
        if (!value || value == null) {
            throw new Error("value not found in cache - " + value);
        }
        return Number(value);
    }

    // sets the key value pair in cache
    async set(key: number, result: number): Promise<void> {
        console.log("set invoked");
        await this.acquire();
        try {
            console.log("setting values");
            await this.client.set(String(key), String(result));
        }
        finally {
            this.release();
        }
    }

    // list
    async list() {
        return await this.client.keys("*");
    }
}

