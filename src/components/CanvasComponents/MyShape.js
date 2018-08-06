import React, { Component } from 'react';
import {Shape} from 'react-konva';

class MyShape extends Component {

    constructor(props) {
        super()
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.click();
    }
    
    render() {
        return <Shape fill={this.props.color} draggable
                    sceneFunc = {
                        function(ctx) {
                            ctx.beginPath();
                            ctx.moveTo(20, 50);
                            ctx.lineTo(220, 80);
                            ctx.quadraticCurveTo(150, 100, 260, 170);
                            ctx.closePath();
                            ctx.fillStrokeShape(this);
                        }
                    }
        />
    }
}

export default MyShape;