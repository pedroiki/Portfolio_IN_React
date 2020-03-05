import React from "react"

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state={
            counter:0

        }

    }
    increment=() =>{
        this.setState(
            {
                counter: this.state.counter +1
            }
        )
    }

    decrement=() =>{
        this.setState(
            {
                counter: this.state.counter -1
            }
        )
    }

    render (){
        return(
        
            <div> 
                <div>
                    {this.state.counter}     
                </div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter