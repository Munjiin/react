import React, {Component} from "react"
import RefInner from './RefInner'

class RefOuter extends Component{

    /*
    //방법1
    changeHandler = (event)=>{
        console.log("outer change click...")

        this.inner.setState({
            'title':'Outer call inner component'
        })
    }

    render() {
        return (
            <div>
                <h2>바깥쪽 부모 컴포넌트</h2>
                <button onClick={this.changeHandler}>Change</button>
                <RefInner ref={(ref)=>this.inner=ref}/>

            </div>
        );
    }
    */

    //방법2
    state = {
        content:"Outer Content"
    }

    changeHandler = (e) => {
        console.log("outer change click...")

        this.setState({
            content:"Change.................."
        })

    }

    render() {
        return (
            <div>
                <h2>바깥쪽 부모 컴포넌트</h2>
                <button onClick={this.changeHandler}>Change</button>
                <RefInner title={this.state.content} />
            </div>
        )
    }

}

export default RefOuter