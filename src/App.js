import React, {Component} from 'react';

class Equipe extends Component{
      render(){//método obrigatório
        return(

          <div> 
            <Sobre nome={this.props.nome} idade={this.props.cargo} cargo={this.props.idade}/>

            <Social/>
         <hr/>
          </div>
        );
      }

}

class Sobre extends Component{

  render(){//método obrigatório
    return(

      <div> 
        
            <h2>Bem-vindo {this.props.nome}</h2>
            <h3>Sou: {this.props.cargo}</h3>
            <h3>Tenho: {this.props.idade}anos </h3>
          
        
      </div>
    );
  }

}

const Social =() =>{
  return(
  <div> 
        
            <a>Facebook </a>
            <a>Instagram </a>
            <a>LinkedIn  </a>
          
        
      </div>
  );
}

//componente principal - cria  pagina principal
function App() {
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Lucas" idade="24" cargo="programador"/>
     
   
   </div>
  );
}

export default App;