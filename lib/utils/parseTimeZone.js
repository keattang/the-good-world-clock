export default (tz) => {
    const locations = tz.replace(/_/g, ' ').split('/')
    return {
        name: locations.join(' / '),
        majorLocation: locations[0],
        minorLocation: locations[1],
        code: tz
    }
}
