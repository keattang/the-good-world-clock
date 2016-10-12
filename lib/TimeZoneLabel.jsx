import React from 'react'

const getCityFromTimezone = (timeZone) => timeZone.split('/').pop().replace(/_/g, ' ')

const styles = {
    color: 'white',
    fontSize: '1.6em',
    marginTop: '10px',
    marginLeft: '10px',
    position: 'absolute',
    zIndex: 1
}

const TimeZoneLabel = (props) => {
    return <div className='time-zone-label' style={styles}>{getCityFromTimezone(props.timeZone)}</div>
}

TimeZoneLabel.propTypes = {
    timeZone: React.PropTypes.string
}

export default TimeZoneLabel
