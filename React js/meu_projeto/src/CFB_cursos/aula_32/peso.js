import React from "react"
class Peso extends React.Component{
    constructor(){ // Metodo construtor e super é pq vamos trabalhar com props
        super() 
    }
    render(){
        return(
            <div>
                <label>
                    Peso: <input type="text" value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}}/>
                </label> {/* Devemos usar o this para componentes de classes */}
            </div>
        )
    }
}

export default Peso