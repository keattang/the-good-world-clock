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

const DayBlock = ({timeZone, currentTime, style, index}) => {
    const time = moment.tz(currentTime, timeZone.code)
    const styles = {
        ...style,
        width: DAY_BAR_PX_WIDTH + 'px',
        height: '100%',
        backgroundColor: index % 2 ? '#21252b' : '#383d46',
        // position: 'relative',
        // left: getLeftOffset(time)
    }
    return (
        <div className="day-block" style={styles}>
            <TimeLabelBar />
            <MinuteTickBar />
        </div>
    )
}

DayBlock.propTypes = {
    timeZone: React.PropTypes.object,
    currentTime: React.PropTypes.instanceOf(Date),
    style: React.PropTypes.object,
    index: React.PropTypes.number
}

export default DayBlock
