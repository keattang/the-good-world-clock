import React from 'react'

import MinuteTickBar from './MinuteTickBar'
import TimeLabelBar from './TimeLabelBar'

import moment from 'moment-timezone'

import { DAY_BAR_PX_WIDTH, MINUTE_INTERVAL, MINUTE_SPACE_PX_WIDTH, MINUTE_TICK_PX_WIDTH } from './constants'

const getLeftOffset = (time) => {
    const minutes = time.hours() * 60 + time.minutes()
    const minuteIntervals = minutes / MINUTE_INTERVAL

    return Math.floor(
        (window.innerWidth / 2)
        - minuteIntervals * (MINUTE_TICK_PX_WIDTH + MINUTE_SPACE_PX_WIDTH)
    )
}

const DayBlock = (props) => {
    const time = moment.tz(props.currentTime, props.timeZone)
    const styles = {
        width: DAY_BAR_PX_WIDTH + 'px',
        height: '100%',
        backgroundColor: '#21252b',
        color: 'white',
        position: 'relative',
        left: getLeftOffset(time)
    }

    return (
        <div className="time-block" style={styles}>
            <TimeLabelBar />
            <MinuteTickBar />
        </div>
    )
}

DayBlock.propTypes = {
    timeZone: React.PropTypes.string,
    currentTime: React.PropTypes.instanceOf(Date)
}

export default DayBlock
