import React from 'react'

const styles = {
	width: '100%',
	height: '100%',
	top: 0,
    left: 0,
    overflow: 'hidden'
}

const Svg = ({ path, width, height }) => {

    return (
		<svg xmlns="http://www.w3.org/2000/svg" style={styles} viewBox={`0 0 ${width} ${height}`}>
			<path d={path} />
		</svg>
    )
}

Svg.propTypes = {
    path: React.PropTypes.string,
	width: React.PropTypes.number,
	height: React.PropTypes.number,
}

export default Svg
