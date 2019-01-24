import React,{Component} from 'react'

class RefEx extends Component{

    handelClick = (event) =>{
        console.log("handleClick")
        console.log(this.input.value)
    }




    render() {
        return (
            <div>
                <input type='text' ref={(ref)=>this.input=ref}></input>
                <button onClick={this.handelClick}>CLICK</button>
            </div>
        );
    }
}

export default RefEx