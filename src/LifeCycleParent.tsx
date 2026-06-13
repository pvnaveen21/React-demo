import { Component } from "react";
import Memo from "./Memo";
interface propData{
    userName:any,
    count:any
}
interface stateData {
            objData: any,
            name: any,
            count:any,
            userName:any

}


export default class LifeCycleParent extends Component <propData, stateData>{

    constructor(props:any){
        super(props)
        console.log('parent constructor');
        this.state ={
            objData: [],
            name:'Added',
            count: 0,
            userName: 'Added more'
        }
        
    }
    componentDidMount() {
        console.log('parent componentDidMount');
        // alert('APi call')
        // this.setState({
        //     objData: [
        //         { id: "1", name: 'person 1', age: 3, status: true },
        //         { id: "2", name: 'person 2', age: 5, status: false },
        //         { id: "3", name: 'person 3', age: 7, status: false },
        //         { id: "4", name: 'person 4', age: 1, status: true },
        //         { id: "5", name: 'person 5', age: 9, status: true },
        //     ]
        // })
    }

    shouldComponentUpdate(){
        console.log("parent  shouldComponentUpdate");
        return true
    }

    componentDidUpdate() {
        console.log("parent  componentDidUpdate");
    }

    render() {
        console.log('parent render');

        return(
            <>
                <h1>Life Cycle Parent</h1>
                < h1>count: {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Update Count</button>
                <button onClick={() => this.setState({userName: 'Naveen pv'})}>Update Name</button>      
                {/* <LifeCycleChild name={this.state.userName} /> */}
                <Memo name={this.state.userName}></Memo>
            </>
        )
        
    }
}