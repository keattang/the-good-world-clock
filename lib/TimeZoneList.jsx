import React from 'react'

const itemStyles = {
    cursor: 'pointer',
    listStyleType: 'none',
    padding: '2px',
    borderBottom: 'solid 1px rgba(255, 255, 255, 0.3)'
}

const TimeZoneList = ({ timeZones, onItemClick, height }) => {

    const listStyles = {
        height,
        width: '100%',
        padding: 0,
        overflowY: 'scroll'
    }

    const listItems = timeZones.map(tz => {
        return (
            <li className='time-zone-list-item' style={itemStyles} key={tz.code} onClick={() => onItemClick(tz)}>
                {tz.name}
            </li>
        )
    })

    return (
        <ul className="time-zone-list" style={listStyles}>
            {listItems}
        </ul>
    )
}

TimeZoneList.propTypes = {
    onItemClick: React.PropTypes.func,
    timeZones: React.PropTypes.arrayOf(React.PropTypes.object),
    height: React.PropTypes.string
}


export default TimeZoneList
