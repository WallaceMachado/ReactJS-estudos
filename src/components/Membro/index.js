import React, { Component } from 'react';

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome,
            status: false
        };

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({status: true})
    }

    sair(){
        this.setState({status: false})
    }

    render(){
        return(
            <div>
                {this.state.status ?
                <div>
                {/*primeiro chega aqui a string "visitante enviada pelo APP"*/}
               <h2>Bem-vindo(a) </h2>
               <button onClick={this.sair} >
                   sair
               </button>
               </div> :
               <div>
               <button onClick={this.entrar} >
                   Entrar no sistema
               </button>
               </div>
                 }
            </div>
        );
    }
}

export default Membro;