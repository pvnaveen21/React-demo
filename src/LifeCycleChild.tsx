import { PureComponent } from "react";

export default class LifeCycleChild extends PureComponent {
    constructor(props:any) {
        super(props)
        console.log('Child constructor');
    }
    componentDidMount() {
        console.log('Child componentDidMount');
    }


    render() {
        console.log('Child render');
        return(
            <>
                <h1>Life Cycle Child</h1>
                {/* <p>parent name: {this.props.name}</p> */}
            </>
        )
        
    }
}