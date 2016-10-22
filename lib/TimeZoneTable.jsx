import React from 'react'
import { connect } from 'react-redux'
import TimeZoneRow from './TimeZoneRow'
import AddTimeZoneButton from './AddTimeZoneButton'

const styles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflowX: 'scroll'
}

const TimeZoneTable = ({timeZones, currentTime}) => {
    const timeZoneRows = timeZones.map((timeZone, i) => {
        return <TimeZoneRow currentTime={currentTime} timeZone={timeZone} rowIndex={i} key={`timezone_${i}`} />
    })
    return (
        <div className="time-zone-table" style={styles}>
            {timeZoneRows}
            <AddTimeZoneButton />
        </div>
    )
}

TimeZoneTable.propTypes = {
    timeZones: React.PropTypes.arrayOf(React.PropTypes.object),
    currentTime: React.PropTypes.instanceOf(Date)
}

const mapStateToProps = (state) => state


export default connect(mapStateToProps)(TimeZoneTable)
