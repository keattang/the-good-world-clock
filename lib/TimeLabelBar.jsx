import TimeLabel from './TimeLabel'
import divisibleBy from './utils/divisibleBy'
import React from 'react'
import {
    MINUTE_INTERVALS_PER_DAY,
    MINUTE_INTERVAL,
    TIME_LABEL_MINUTE_INTERVAL
} from './constants'

const timeLabels = []

for (var i = 0; i < MINUTE_INTERVALS_PER_DAY; i++) {
    const minutes = i * MINUTE_INTERVAL
    if (divisibleBy(minutes, TIME_LABEL_MINUTE_INTERVAL)) {
        timeLabels.push(<TimeLabel key={`time_label_${i}`} minutes={minutes}/>)
    }
}

const TimeLabelBar = () => {
    return <div className='time-label-bar'>{timeLabels}</div>
}


export default TimeLabelBar
