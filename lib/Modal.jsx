import React from 'react'

const BACKGROUND_CLASS = 'modal-background'

const backgroundStyles = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 99999,
    pointerEvents: 'auto',
}


class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
        this.onBackgroundClick = this.onBackgroundClick.bind(this)
    }

    onBackgroundClick(event) {
        if (event.target.className === BACKGROUND_CLASS) {
            return this.props.onBackgroundClick(event)
        }
    }

    render() {
        const containerStyles = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: this.props.backgroundColor,
            margin: 'auto',
            padding: '15px',
            overflow: 'hidden',
            top: '60px',
            position: 'relative'
        }

        if (this.props.show) {
            return (
                <div className={BACKGROUND_CLASS} style={backgroundStyles} onClick={this.onBackgroundClick}>
                    <div className="modal-content-container" style={containerStyles}>
                        {this.props.contentComponent}
                    </div>
                </div>
            )
        }

        return null
    }
}

Modal.defaultProps = {
    height:'300px',
    width:'300px',
    backgroundColor:'#21252b'
}

Modal.propTypes = {
    show: React.PropTypes.bool,
    contentComponent: React.PropTypes.element,
    onBackgroundClick: React.PropTypes.func,
    height: React.PropTypes.string,
    width: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
}


export default Modal
