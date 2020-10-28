export function fibonacci(n: number): number | string {
    // golden number
    const phi = (1 - Math.sqrt(5)) / 2;
    const Phi = (1 + Math.sqrt(5)) / 2;
    if (n > 0)
        return Math.round((Math.pow(Phi, n - 1) - Math.pow(phi, n - 1)) / Math.sqrt(5));
    else
        return "invalid input"
}

