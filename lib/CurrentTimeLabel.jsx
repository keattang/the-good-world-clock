import React from 'react'

import { PX_PER_MINUTE } from './constants'
import minToTime from './utils/minToTime'

const styles = {
    fontSize: '1.6em',
    marginTop: '10px',
    marginLeft: '10px',
    position: 'fixed',
    left: '50vw',
    zIndex: 1
}

const CurrentTimeLabel = ({ minuteOffset, scrollPos }) => {

    const linePos = Math.round(window.innerWidth / 2)
    const minutes = ( linePos + scrollPos ) / PX_PER_MINUTE - minuteOffset

    return (
        <div className='current-time-label' style={styles}>
            {minToTime(minutes)}
        </div>
    )
}

CurrentTimeLabel.propTypes = {
    minuteOffset: React.PropTypes.number,
    scrollPos: React.PropTypes.number,
}

export default CurrentTimeLabel
