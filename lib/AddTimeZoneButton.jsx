import React from 'react'
import { connect } from 'react-redux'
import { toggleTimeZoneAdder } from './redux/actions'
import addButton from './svg/addButton'
import Svg from './Svg'

const styles = {
    cursor: 'pointer',
    margin: '15px',
    position: 'fixed',
}

const iconStyles = {
    width: '50px',
    height: '50px',
    stroke: 'white',
    fill: 'none',
    strokeWidth: '3px',
    margin: 'auto',
}

const AddTimeZoneButton = ({ onClick }) => {
    return (
        <div className="add-time-zone-button" style={styles} onClick={onClick}>
            <div className="add-time-zone-icon" style={iconStyles}>
                <Svg path={addButton} width={100} height={100} />
            </div>
            <div>Add timezone</div>
        </div>
    )
}

AddTimeZoneButton.propTypes = {
    onClick: React.PropTypes.func
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(toggleTimeZoneAdder())
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTimeZoneButton)
