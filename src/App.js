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

/*Vamos lá relembrar quais são os Tipos de Componentes?

Como você viu nas aulas no ReactJS nós temos 2 principais tipos de componentes: Componentes com Estados e Componentes sem Estados

Também são conhecidos por (StateLess e StateFull);

Os dois componentes tem as mesmas características, já citadas anteriomente, com a diferença que: um componente com estados possui atributos que poderão ter o seu valor alterado, e a cada alteração, impactarão diretamente na renderização do componente.

Já, os componentes sem estados, são componentes mais simples, que quase sempre só servem para renderizar uma responsabilidade pequena de nossa página.

Outra diferença muito importante é a forma como estes componentes são escritos.

Um componente com estados quase sempre vai ser representado, de fato, por uma classe, por exemplo:

import React, { Component } from "react";
 
class App extends Component {
  render() {
    return(
    <h1>Olá ReactJS</h1>
    );
  }
}
 
export default App;
Note que para este componente nós temos obrigatoriamente que utilizar o método render() pois ele será o responsável por colocar e recolocar as informações na tela.

Mas, EXATAMENTE o mesmo componente, poderia ser escrito da seguinte forma:

import React from "react";
 
const App = () => {
  return( 
    <h1>Olá ReactJS</h1>
  );
};
 
export default App;
*/