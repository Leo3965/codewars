export const digitalRoot = (n: number): number => {
    // your code here
    let result = calculateSum(n)
    let sum = result.sum
    do {
        result = calculateSum(sum)
        sum = result.sum
    } while (result.digits > 1)

    return result.sum

}

type Result = {
    sum: number
    digits: number
    numbers: number[]
}

function calculateSum(n: number): Result {
    const nAsString = String(n).split('')
    const numbers = nAsString.map(n => parseInt(n))
    return {
        sum: numbers.reduce((a, b) => a + b, 0),
        digits: numbers.length,
        numbers,
    }
}