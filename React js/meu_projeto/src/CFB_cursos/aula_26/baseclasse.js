import React from "react";

export default class BaseClass extends React.Component{
    constructor(props){
        super(props) //Para permitir o uso de props
        this.state={ //state
            canal: "CFB Cursos",
            curso: "React",
            ativo: true,
            nome: this.props.nomeAluno
        }
        this.status=this.props.status

        //let ad = ativarDesativar.bind(this); //blindagem
        this.ativarDesativar = this.ativarDesativar.bind(this);
    }

    ativarDesativar(){  // Função para manipular state
        this.setState(
            state=>({
                ativo: !state.ativo
            })
        )
    }

    componentDidMount(){
        console.log("O componente foi criado")
    }

    componentDidUpdate(){
        console.log("O componente foi atualizado")
    }

    componentWillUnmount(){
        console.log("O componentes foi removido")
    }

    render(){
        return(
            <>
                <h1>Componente de Classe</h1>
                <button onClick={this.ad}>Ativar Desativar</button>

                <button onClick={()=>this.ativarDesativar()}>Ativar Desativar</button>
            </>
        )
    }
}