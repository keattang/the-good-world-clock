import React from 'react'

import TimeZoneRow from './TimeZoneRow'
import CurrentTimeLine from './CurrentTimeLine'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: new Date(),
            timeZones: [
                'Australia/Sydney',
                'America/Los_Angeles',
                'Europe/London',
                'Asia/Singapore'
            ]
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.refreshTime(), 50)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    refreshTime() {
        this.setState({
            currentTime: new Date()
        })
    }

    render() {
        const timeZoneRows = this.state.timeZones.map((timeZone, i) => {
            return <TimeZoneRow currentTime={this.state.currentTime} timeZone={timeZone} rowIndex={i} key={`timezone_${i}`} />
        })

        return (
            <div className="app">
                {timeZoneRows}
                <CurrentTimeLine />
            </div>
        )
    }
}

export default App
