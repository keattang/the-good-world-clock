// Action types
export const ADD_TIMEZONE = 'ADD_TIMEZONE'
export const REMOVE_TIMEZONE = 'REMOVE_TIMEZONE'
export const TOGGLE_TIME_ZONE_ADDER = 'TOGGLE_TIME_ZONE_ADDER'

// Action creators
export const addTimeZone = (timeZone) => {
    return {
        timeZone,
        type: ADD_TIMEZONE,
    }
}

export const removeTimeZone = (index) => {
    return {
        index,
        type: REMOVE_TIMEZONE
    }
}

export const toggleTimeZoneAdder = () => {
    return {
        type: TOGGLE_TIME_ZONE_ADDER
    }
}
