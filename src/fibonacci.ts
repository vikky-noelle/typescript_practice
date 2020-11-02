import { Cache } from "./cache";

// object of cache class
const cache = new Cache();

export function mathFibonacci(n: number): number | string {
  try {
    return cache.get(n);
  } catch (e) {
    // golden number
    const phi = (1 - Math.sqrt(5)) / 2;
    const Phi = (1 + Math.sqrt(5)) / 2;
    if (n > 0) {
      const result = Math.round(
        (Math.pow(Phi, n - 1) - Math.pow(phi, n - 1)) / Math.sqrt(5)
      );
      cache.set(n, result);
      return result;
    } else return "invalid input";
  }
}

// TODO: This one is not exiting the function, check the logic
function recursionFnToGetFibonacci(n: number): number {
  try {
    return cache.get(n);
  } catch (e) {
    const result =
      recursionFnToGetFibonacci(n - 1) + recursionFnToGetFibonacci(n - 2);
    cache.set(n, result);
    return result;
  }
}

export function dpFibonacci(n: number): number | string {
  if (n <= 0) {
    return "invalid input";
  }
  try {
    return cache.get(n);
  } catch (e) {
    return recursionFnToGetFibonacci(n);
  }
}
