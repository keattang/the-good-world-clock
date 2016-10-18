import React from 'react'
import { connect } from 'react-redux'
import TimeZoneList from './TimeZoneList'
import { SEARCH_BAR_PX_HEIGHT } from './constants'

const styles = {
    height: '100%',
}

const inputStyles = {
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    height: `${SEARCH_BAR_PX_HEIGHT}px`,
    borderRadius: '2px',
    paddingLeft: '10px',
}

class TimeZoneFinder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
        }
        this.onSearchTextChange = this.onSearchTextChange.bind(this)
    }

    onSearchTextChange(event) {
        this.setState({searchText: event.target.value})
    }

    filteredTimeZones() {
        return this.props.availableTimezones.filter(tz => tz.name.toLowerCase().includes(this.state.searchText))
    }

    render() {
        return (
            <div className="time-zone-adder" style={styles}>
                <input
                    type="text"
                    autoFocus
                    style={inputStyles}
                    onChange={this.onSearchTextChange}
                    placeholder="Search for a timezone"
                />
                <TimeZoneList 
                    timeZones={this.filteredTimeZones()}
                    onItemClick={this.props.onItemClick}
                    height={`calc(100% - ${SEARCH_BAR_PX_HEIGHT}px - 16px)`}
                />
            </div>
        )
    }
}

TimeZoneFinder.propTypes = {
    onItemClick: React.PropTypes.func,
    availableTimezones: React.PropTypes.arrayOf(React.PropTypes.object)
}


const mapStateToProps = (state) => {
    return {
        availableTimezones: state.availableTimezones
    }
}

export default connect(mapStateToProps)(TimeZoneFinder)
