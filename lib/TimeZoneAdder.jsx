import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import TimeZoneFinder from './TimeZoneFinder'
import { addTimeZone, toggleTimeZoneAdder } from './redux/actions'

const TimeZoneAdder = ({show, onTimeZoneSelect, onCancelClick}) => {
    console.log('TimeZoneAdder rendered')
    return (
        <Modal
            show={show}
            onBackgroundClick={onCancelClick}
            contentComponent={<TimeZoneFinder onItemClick={onTimeZoneSelect} />}
        />
    )
}

TimeZoneAdder.propTypes = {
    show: React.PropTypes.bool,
    onTimeZoneSelect: React.PropTypes.func,
    onCancelClick: React.PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTimeZoneSelect: (timeZone) => {
            dispatch(addTimeZone(timeZone))
        },
        onCancelClick: () => {
            dispatch(toggleTimeZoneAdder())
        }
    }
}

const mapStateToProps = (state) => {
    return {show: state.showTimeZoneAdder}
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeZoneAdder)
