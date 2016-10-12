import React from 'react'

import MinuteTick from './MinuteTick'
import MinuteSpace from './MinuteSpace'
import { MINUTE_INTERVALS_PER_DAY, MINUTE_INTERVAL, HOUR_TICK_PX_HEIGHT } from './constants'

const minuteTicks = []

for (var i = 0; i < MINUTE_INTERVALS_PER_DAY; i++) {
    minuteTicks.push(<MinuteTick key={`tick_${i}`} minutes={i*MINUTE_INTERVAL}/>)
    minuteTicks.push(<MinuteSpace key={`space_${i}`}/>)
}

const styles = {
    height: HOUR_TICK_PX_HEIGHT + 'px',
    position: 'absolute',
    bottom: 0
}

const MinuteTickBar = () => {
    return <div className="minute-tick-bar" style={styles}>{minuteTicks}</div>
}

export default MinuteTickBar
