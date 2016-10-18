import React from 'react'
import DayBlock from './DayBlock'
import TimeZoneLabel from './TimeZoneLabel'
import RemoveTimeZoneButton from './RemoveTimeZoneButton'

const TimeZoneRow = ({timeZone, rowIndex, currentTime}) => {
    const dayBlocks = [
        <DayBlock currentTime={currentTime} timeZone={timeZone} key={`day_1`}/>
    ]
    const styles = {
        width: '100%',
        height: '100px',
    }
    return (
        <div className="time-zone-row" style={styles}>
            <TimeZoneLabel timeZone={timeZone} />
            <RemoveTimeZoneButton rowIndex={rowIndex} />
            {dayBlocks}
        </div>
    )
}

TimeZoneRow.propTypes = {
    timeZone: React.PropTypes.object,
    rowIndex: React.PropTypes.number,
    currentTime: React.PropTypes.instanceOf(Date)
}

export default TimeZoneRow
