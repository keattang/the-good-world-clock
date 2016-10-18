
const STORAGE_KEY = 'app_state'

export default class LocalStorage {
    static saveState (state) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
        } catch (e) {
            // Ignore write errors
        }
    }

    static loadState () {
        try {
            const serializedState = localStorage.getItem(STORAGE_KEY)
            if (serializedState === null) {
                return undefined
            }
            return JSON.parse(serializedState)
        } catch (e) {
            return undefined
        }
    }

    static clearState () {
        try {
            localStorage.removeItem(STORAGE_KEY)
        } catch (e) {
            // Ignore write errors
        } 
    }
}
