import React from 'react'
import { connect } from 'react-redux'
import { removeTimeZone } from './redux/actions'
import removeButton from './svg/removeButton'
import Svg from './Svg'

const styles = {
    position: 'fixed',
    right: 0,
    zIndex: 1,
    cursor: 'pointer',
    marginTop: '10px',
    marginRight: '20px',
    height: '25px',
    width: '25px',
    stroke: 'white',
    fill: 'none',
    strokeWidth: '4px',
}

const RemoveTimeZoneButton = ({ rowIndex, onClick }) => {

    return (
        <div className="remove-time-zone-button" style={styles} onClick={() => onClick(rowIndex)}>
            <Svg path={removeButton} width={100} height={100} stroke='#FFF' fill='none'/>
        </div>
    )
}

RemoveTimeZoneButton.propTypes = {
    rowIndex: React.PropTypes.number,
    onClick: React.PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (rowIndex) => {
            dispatch(removeTimeZone(rowIndex))
        }
    }
}

export default connect(undefined, mapDispatchToProps)(RemoveTimeZoneButton)
