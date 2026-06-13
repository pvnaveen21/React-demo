import { Component } from "react";
interface propData{
    userName:any
}
interface stateData {
    name: any,
    age: any,
    place: any

}
class ClassCom extends Component<propData, stateData> {
    constructor(props:any){
        super(props)
        this.state ={
            name: 'Added more',
            age: 1,
            place:""
        }
    }

    changeState =()=>{
        // alert('yes')
        this.setState({
            name:'Naveen pv'
        })
    }

    render() {
        return(
            <>
                <h1>Class Component</h1>
                <p>props value - {this.props.userName}</p>

                <p>{this.state.name}</p>
                <button className="btn btn-success" onClick={()=>this.changeState()}>Change</button>
            </>
        )
    }

}

export default ClassCom