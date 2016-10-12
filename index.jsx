import React from 'react'
import ReactDOM from 'react-dom'

import App from './lib/App'

require('./index.scss')

ReactDOM.render(
    <App />,
    document.getElementsByClassName('app-container')[0]
)
