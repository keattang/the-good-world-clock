import  padZerosLeft from './padZerosLeft'

export default (minutes) => {
    // Bound the minutes to within a 24 hour period
    const boundedMins = minutes % (24 * 60)
    return `${padZerosLeft(Math.floor(boundedMins / 60), 2)}:${padZerosLeft(Math.floor(boundedMins % 60), 2)}`
}
