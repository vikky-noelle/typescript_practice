import { Cache } from './cache';

// object of cache class
let cache = new Cache();

export function math_fibonacci(n: number): number | string {
    if (cache.check(n)) {
        return cache.get(n);
    }
    else {
        // golden number
        const phi = (1 - Math.sqrt(5)) / 2;
        const Phi = (1 + Math.sqrt(5)) / 2;
        if (n >= 0) {
            var result = Math.round((Math.pow(Phi, n - 1) - Math.pow(phi, n - 1)) / Math.sqrt(5));
            cache.set(n, result);
            return result;
        }
        else
            return "invalid input"
    }
}

export function dp_fibonacci(n: number): number | string {
    if (n < 0) {
        return "invalid input";
    }
    else if (cache.check(n)) {
        return cache.get(n);
    }
    else {
        var result = 0;
        for (var i = 2; i <= n; i++) {
            result = cache.get(i - 1) + cache.get(i - 2);
            cache.set(i, result);
        }
        return result;
    }
}
