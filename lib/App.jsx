import React from 'react'

import CurrentTimeLine from './CurrentTimeLine'
import TimeZoneTable from './TimeZoneTable'
import TimeZoneAdder from './TimeZoneAdder'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: new Date(),
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.refreshTime(), 5000)
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
        return (
            <div className="app">
                <TimeZoneTable currentTime={this.state.currentTime}/>
                <CurrentTimeLine />
                <TimeZoneAdder />
            </div>
        )
    }
}

export default App
