import { combineReducers } from 'redux'
import { ADD_TIMEZONE, REMOVE_TIMEZONE, TOGGLE_TIME_ZONE_ADDER } from './actions'
import parseTimeZone from '../utils/parseTimeZone'
import moment from 'moment-timezone'

const initialTimeZones = [
    parseTimeZone(moment.tz.guess())
]

const availableTimezones = moment.tz.names().map(parseTimeZone)

const timeZones = (state=initialTimeZones, action) => {
    switch (action.type) {
        case ADD_TIMEZONE:
            return [...state, action.timeZone]
        case REMOVE_TIMEZONE:
            const newState = [...state]
            newState.splice(action.index, 1)
            return newState
        default:
            return state
    }
}

const showTimeZoneAdder = (state=false, action) => {
    switch (action.type) {
        case TOGGLE_TIME_ZONE_ADDER:
            return !state
        default:
            return state
    }
}

const appReducers = combineReducers({
    timeZones,
    showTimeZoneAdder,
    availableTimezones: () => availableTimezones
})

export default appReducers
