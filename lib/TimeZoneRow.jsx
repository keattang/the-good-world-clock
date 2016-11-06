import React from 'react'
import moment from 'moment-timezone'

import DayBlock from './DayBlock'
import TimeZoneLabel from './TimeZoneLabel'
import RemoveTimeZoneButton from './RemoveTimeZoneButton'
import CurrentTimeLabel from './CurrentTimeLabel'
import { Grid } from 'react-virtualized'
import { DAY_BAR_PX_WIDTH, PX_PER_MINUTE } from './constants'

const TimeZoneRow = ({timeZone, rowIndex, currentTime, scrollPos}) => {
    // const dayBlocks = [
    //
    // ]
    // const styles = {
    //     width: '100%',
    //     height: '100px',
    // }
    const tz = moment.tz.zone(timeZone.code)
    const minuteOffset = tz.parse(Date.now())
    const styles = {
        left: `${minuteOffset * PX_PER_MINUTE}px`,
        position: 'relative',
    }

    const cellRenderer = ({ columnIndex, style, key }) => {
        return <DayBlock currentTime={currentTime} timeZone={timeZone} key={key} style={style} index={columnIndex}/>
    }


    return (
        <div className="time-zone-row" style={styles}>
            <TimeZoneLabel timeZone={timeZone} />
            <RemoveTimeZoneButton rowIndex={rowIndex} />
            <CurrentTimeLabel minuteOffset={minuteOffset} scrollPos={scrollPos} />
            <Grid
                cellRenderer={cellRenderer}
                columnWidth={DAY_BAR_PX_WIDTH}
                width={DAY_BAR_PX_WIDTH * 10}
                columnCount={10}
                rowHeight={100}
                height={100}
                rowCount={1}
            />
        </div>
    )
}



TimeZoneRow.propTypes = {
    timeZone: React.PropTypes.object,
    rowIndex: React.PropTypes.number,
    currentTime: React.PropTypes.instanceOf(Date),
    scrollPos: React.PropTypes.number
}

export default TimeZoneRow
