import React, { Component } from 'react';
import ChangeColorRect from './CanvasComponents/ChangeColorRect';
import {Layer, Stage, Text} from 'react-konva';
import ChangeStrokeCircle from './CanvasComponents/ChangeStrokeCircle';
import MyShape from './CanvasComponents/MyShape';

// function rect(props) {
//     const {ctx, x, y, width, height} = props;
//     ctx.fillRect(x, y, width, height);
// }

class Canvas extends Component {

    constructor(props) {
        super()
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    // componentDidMount() {
    //     this.updateCanvas();
    // }

    // componentDidUpdate() {
    //     this.updateCanvas();
    // }

    // updateCanvas() {
    //     const ctx = this.refs.canvas.getContext('2d');
    //     ctx.clearRect(0,0,300,300);
    //     rect({ctx, x:10, y:10, width:50, height:50});
    //     rect({ctx, x:110, y:110, width:50, height:50});
    // }

    handleMouseEnter() {
        this.props.handleMouseEnter();
    }

    handleMouseLeave() {
        this.props.handleMouseLeave();
    }
    
    handleClick() {
        this.props.click();
    }
    
    render() {
        return  <Stage width={window.innerWidth} height={700}>
                    <Layer>
                        <Text text={"Try click on rect:: Color:" + this.props.color} />
                        <ChangeColorRect color={this.props.color} click={this.handleClick} />
                        <ChangeStrokeCircle color={this.props.color}
                                            isMouseInside={this.props.isMouseInside}
                                            handleMouseEnter={this.handleMouseEnter}
                                            handleMouseLeave={this.handleMouseLeave}
                        />
                        <MyShape color={this.props.color} />
                    </Layer>
                </Stage>
    }
}

export default Canvas;