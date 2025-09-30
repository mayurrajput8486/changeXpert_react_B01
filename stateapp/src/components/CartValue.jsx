import { Component } from "react"
class CartValue extends Component{
    //to initialize the state in class based comp
    constructor () {
        super()
        this.state = {
            count : 0
        }
    }
    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () =>{
        if(this.state.count > 0){
            this.setState({
            count : this.state.count - 1
        })
        }
        
    }
    render(){
        return(
            <div>
                <h1>Learn State in Class Based Comp</h1>
                <div className="w-50 bg-dark mx-auto p-3 rounded-4">
                    <div className="btn-group">
                        <button className="btn btn-primary fs-2 fw-bold" onClick={this.increment}>+</button>
                        <button className="btn btn-danger fs-2 fw-bold">{this.state.count}</button>
                        <button className="btn btn-primary fs-2 fw-bold" onClick={this.decrement}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default CartValue
