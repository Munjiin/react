/*list ㅇㅖ제 map으로 루프를 돌림*/

import React,{Component} from "react";

class SampleList extends Component{

    state={
        arr: ["AAA","BBB","CCC","DDD"]
    }

    render() {

        const frgment = this.state.arr.map((value, index)=><li key={index}>{value}</li>)
        return (
            <div>
                <h3>SampleList</h3>
                <ul>
                    {frgment}
                </ul>
            </div>
    )
    }
}

export default SampleList