import React from 'react'

const getCityFromTimezone = (timeZone) => timeZone.code.split('/').pop().replace(/_/g, ' ')

const styles = {
    fontSize: '1.6em',
    marginTop: '10px',
    marginLeft: '10px',
    position: 'fixed',
    left: 0,
    zIndex: 1
}

const TimeZoneLabel = (props) => {
    return <div className='time-zone-label' style={styles}>{getCityFromTimezone(props.timeZone)}</div>
}

TimeZoneLabel.propTypes = {
    timeZone: React.PropTypes.object
}

export default TimeZoneLabel
