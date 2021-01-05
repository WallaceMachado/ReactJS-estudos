import React, { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = { 
            email: '',
            senha: '',
            sexo: 'masculino'
         }

         this.trocaEmail = this.trocaEmail.bind(this);
         this.trocaSexo = this.trocaSexo.bind(this);
    }

    trocaEmail(e){
        let valorDigitado = e.target.value;// pega o valor digitado
        this.setState({email: valorDigitado});
    }

    trocaSexo(e){
        let valorDigitado = e.target.value
        this.setState({sexo: valorDigitado});
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                Email:
                <input type="email" name="email" value={this.state.email} 
                       onChange={this.trocaEmail /* quando o campo sofre alteração ele chama o metodo*/} /> <br/>
                Senha:
                <input type="text" name="senha" value={this.state.senha}
                       onChange={(e) => this.setState({senha: e.target.value}/*faz o mesmo de o trocaemail porém o codigo está direto aqui e não em um metodo separado*/ )} /><br/>

                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value="masculino">Masculino</option> {/*opções do select*/}
                    <option value="feminino">Feminino</option>
                </select>

                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.senha}</h3>
                </div>
            </div>         
        );
    }
}

export default App;