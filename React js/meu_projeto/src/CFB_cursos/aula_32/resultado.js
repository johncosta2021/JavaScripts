import React from "react"
class Resultado extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <p>Resultado: {this.props.r.toFixed(2)}</p>
            </div>
        )
    }
}

export default Resultado