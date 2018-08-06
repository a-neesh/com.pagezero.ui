import React, { Component } from 'react';
import {Rect} from 'react-konva';

class ChangeColorRect extends Component {

    constructor(props) {
        super()
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.click();
    }
    
    render() {
        return <Rect
                x={10}
                y={10}
                width={window.innerWidth-10}
                height={50}
                fill={this.props.color}
                shadowBlur={10}
                onClick={this.handleClick}
        />
    }
}

export default ChangeColorRect;