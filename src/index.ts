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
        if (n > 0) {
            var result = Math.round((Math.pow(Phi, n - 1) - Math.pow(phi, n - 1)) / Math.sqrt(5));
            cache.set(n, result);
            return result;
        }
        else
            return "invalid input"
    }
}

function reccursion_fn_to_get_fibonacci(n: number): number {
    if (cache.check(n)) {
        return cache.get(n);
    }
    else {
        var result = reccursion_fn_to_get_fibonacci(n - 1) + reccursion_fn_to_get_fibonacci(n - 2);
        cache.set(n, result);
        return result;
    }
}
export function dp_fibonacci(n: number): number | string {
    if (n <= 0) {
        return "invalid input";
    }
    else if (cache.check(n)) {
        return cache.get(n);
    }
    else {
        return reccursion_fn_to_get_fibonacci(n);
    }
}
