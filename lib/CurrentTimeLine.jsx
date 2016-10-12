import React from 'react'

import { TIME_LINE_PX_WIDTH } from './constants'

const styles = {
    height: '100%',
    width: `${TIME_LINE_PX_WIDTH}px`,
    backgroundColor: 'red',
    left: `${Math.floor(window.innerWidth / 2)}px`,
    position: 'absolute'
}

const CurrentTimeLine = () => {
    return <div className='time-line' style={styles}></div>
}

export default CurrentTimeLine
