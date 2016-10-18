import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './lib/App'
import appReducers from './lib/redux/reducers'
import LocalStorage from './lib/utils/LocalStorage'

require('./index.scss')

const appStore = createStore(appReducers, LocalStorage.loadState())

appStore.subscribe(() => {
    LocalStorage.saveState(appStore.getState())
})

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementsByClassName('app-container')[0]
)
