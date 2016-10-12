import React from 'react'
import DayBlock from './DayBlock'
import TimeZoneLabel from './TimeZoneLabel'

const TimeZoneRow = (props) => {
    const dayBlocks = [
        <DayBlock currentTime={props.currentTime} timeZone={props.timeZone} key={`day_1`}/>
    ]
    const styles = {
        width: '100%',
        height: '100px',
        position: 'absolute',
        top: `${props.rowIndex * 100}px`
    }
    return (
        <div className="time-zone-row" style={styles}>
            <TimeZoneLabel timeZone={props.timeZone} />
            {dayBlocks}
        </div>
    )
}

TimeZoneRow.propTypes = {
    timeZone: React.PropTypes.string,
    rowIndex: React.PropTypes.number,
    currentTime: React.PropTypes.instanceOf(Date)
}

export default TimeZoneRow
