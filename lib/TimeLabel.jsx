import React from 'react'

import {
    MINUTE_TICK_PX_WIDTH,
    MINUTE_SPACE_PX_WIDTH,
    MINUTE_INTERVAL,
    TIME_LABEL_PX_WIDTH,
    HOUR_TICK_PX_HEIGHT
} from './constants'

// const isWholeHour = (hours) => hours % 1 === 0

const padZerosLeft = (number, digits) => {
    const numZeros = Math.max(digits - number.toString().length, 0)
    let value = ''
    for (var i = 0; i < numZeros; i++) {
        value += '0'
    }
    value += number
    return value
}

const minToTime = (minutes) => {
    return `${padZerosLeft(Math.floor(minutes / 60), 2)}:${padZerosLeft(minutes % 60, 2)}`
}

const minToLeftOffset = (minutes) => {
    return ((minutes / MINUTE_INTERVAL)
        * (MINUTE_TICK_PX_WIDTH + MINUTE_SPACE_PX_WIDTH)
        - (TIME_LABEL_PX_WIDTH / 2))
}

const TimeLabel = (props) => {
    const styles = {
        color: 'white',
        left: `${minToLeftOffset(props.minutes)}px`,
        bottom: `${HOUR_TICK_PX_HEIGHT + 5}px`,
        position: 'absolute',
        width: `${TIME_LABEL_PX_WIDTH}px`,
        textAlign: 'center'
    }
    return (
        <div className="time-label" style={styles}>
            {minToTime(props.minutes)}
        </div>
    )
}

TimeLabel.propTypes = { minutes: React.PropTypes.number }

export default TimeLabel
