import React from 'react'
import DayBlock from './DayBlock'
import TimeZoneLabel from './TimeZoneLabel'
import RemoveTimeZoneButton from './RemoveTimeZoneButton'
import { Grid } from 'react-virtualized'
import { DAY_BAR_PX_WIDTH } from './constants'

const TimeZoneRow = ({timeZone, rowIndex, currentTime}) => {
    // const dayBlocks = [
    //
    // ]
    // const styles = {
    //     width: '100%',
    //     height: '100px',
    // }

    const cellRenderer = ({ columnIndex, style, key }) => {
        console.log('Rendering cell', columnIndex)
        return <DayBlock currentTime={currentTime} timeZone={timeZone} key={key} style={style} />
    }


    return (
        <div className="time-zone-row">
            <TimeZoneLabel timeZone={timeZone} />
            <RemoveTimeZoneButton rowIndex={rowIndex} />
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
    currentTime: React.PropTypes.instanceOf(Date)
}

export default TimeZoneRow
