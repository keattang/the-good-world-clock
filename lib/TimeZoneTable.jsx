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

class TimeZoneTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollPos: 0,
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(event) {
        this.setState({
          scrollPos: event.target.scrollLeft
        })
    }

    render() {
        const timeZoneRows = this.props.timeZones.map((timeZone, i) => {
            return <TimeZoneRow
                currentTime={this.props.currentTime} timeZone={timeZone}
                rowIndex={i} key={`timezone_${i}`} scrollPos={this.state.scrollPos}
            />
        })

        return (
            <div className="time-zone-table" style={styles} onScroll={this.handleScroll}>
                {timeZoneRows}
                <AddTimeZoneButton />
            </div>
        )
    }
}

TimeZoneTable.propTypes = {
    timeZones: React.PropTypes.arrayOf(React.PropTypes.object),
    currentTime: React.PropTypes.instanceOf(Date)
}

const mapStateToProps = (state) => state


export default connect(mapStateToProps)(TimeZoneTable)
