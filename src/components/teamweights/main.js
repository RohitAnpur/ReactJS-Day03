import React, {Component} from "react";

//
class  Main extends Component {
    constructor(props){
        super(props);
        this.state ={
            allWeights:[]
        }
    }
    //
    componentDidMount(){
        //fetchig the second day react app response from mago DB.
        fetch("http://localhost:8000/getemployees")
        .then(respone=>respone.json())
        .then(respone=>{
            this.setState(
                {allWeights:respone}
            )
        })
    }

    render() {
        return(
            <main>{this.state.allWeights.map((emp,i) => 
            <div key={i}>
                {emp.empName}
                {emp.empPwd}
            </div>
            )
            }     
            </main>
        );
        
    }
        
    
}

export default Main;