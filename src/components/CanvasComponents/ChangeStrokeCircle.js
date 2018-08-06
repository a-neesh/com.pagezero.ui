import React, { Component } from 'react';
import {Circle} from 'react-konva';

class ChangeStrokeCircle extends Component {

    constructor(props) {
        super()
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    
    handleClick() {
        this.props.click();
    }
    handleMouseEnter() {
        this.props.handleMouseEnter();
    }

    handleMouseLeave() {
        this.props.handleMouseLeave();
    }
    
    render() {
        return <Circle
                x={window.innerWidth/2}
                y={window.innerHeight/2}
                radius={50}
                stroke="black"
                strokeWidth={this.props.isMouseInside ? 5 : 1}
                fill={this.props.color}
                shadowBlur={10}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
        />
    }
}

export default ChangeStrokeCircle;