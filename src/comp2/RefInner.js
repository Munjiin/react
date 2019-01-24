import React,{Component} from 'react'


class RefInner extends Component {

    /*
    //방법 1
    state={
        title:'AAAAAAAAAAAAAAAA'
    }

    render(){
        return(
            <div>
                <h3>안쪽 컴포넌트</h3>
                <div>{this.state.title}</div>
            </div>
        )
    }
    */

    //방법 2
    render(){
        return (
            <div >
                <h3>안쪽 컴포넌트</h3>
                <div>{this.props.title}</div>
            </div>
        )
    }

}

export default RefInner