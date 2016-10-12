import React from 'react'
import divisibleBy from './utils/divisibleBy'
import {
    MINUTE_TICK_PX_WIDTH,
    MINUTE_TICK_PX_HEIGHT,
    QUARTER_HOUR_TICK_PX_HEIGHT,
    HOUR_TICK_PX_HEIGHT
} from './constants'

const MinuteTick = (props) => {
    const styles = {
        backgroundColor: 'white',
        width: MINUTE_TICK_PX_WIDTH + 'px',
        height: MINUTE_TICK_PX_HEIGHT + 'px',
        display: 'inline-block'
    }

    if (divisibleBy(props.minutes, 15)) {
        styles.height = QUARTER_HOUR_TICK_PX_HEIGHT + 'px'
    }

    if (divisibleBy(props.minutes, 60)) {
        styles.height = HOUR_TICK_PX_HEIGHT + 'px'
    }

    return <div className="minute-tick" style={styles}></div>
}

MinuteTick.propTypes = { minutes: React.PropTypes.number }

export default MinuteTick
