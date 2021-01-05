import React, {Component} from 'react';

class App extends Component{

    constructor(props){ //construtor da classe e recebe as props
      super(props)// para usar as props do classe pai
      this.state = { // informa todos os componentes que fazem parte da classe
        nome: "Matheus",
        contador: 0
      };

      this.aumentar = this.aumentar.bind(this);// para functions poderem ser usadas
      this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
      let state = this.state;// recebe tudo que está dentro de state
     state.contador += 1;
      this.setState(state)
    }

    diminuir(){
      let state = this.state;// recebe tudo que está dentro de state
      if(state.contador === 0){
        alert('opa chegou a zero');
        return;
      }
      state.contador -= 1;
      this.setState(state)
    }
      render(){//método obrigatório
        return(

          <div> 
            <h1>Contador</h1>
            {this.state.nome}
            <h3>
            <button onClick={this.diminuir}>-</button>
            {this.state.contador}
            <button onClick={this.aumentar}>+</button>
            </h3>
          </div>
        );
      }

}


export default App;