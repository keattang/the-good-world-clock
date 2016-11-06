export default (number, digits) => {
    const numZeros = Math.max(digits - number.toString().length, 0)
    let value = ''
    for (var i = 0; i < numZeros; i++) {
        value += '0'
    }
    value += number
    return value
}
