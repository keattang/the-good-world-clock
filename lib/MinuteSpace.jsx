import React from 'react'
import { MINUTE_SPACE_PX_WIDTH } from './constants'

const styles = {
    width: MINUTE_SPACE_PX_WIDTH + 'px',
    display: 'inline-block'
}

const MinuteSpace = () => {
    return <div className="minute-space" style={styles}></div>
}

export default MinuteSpace
