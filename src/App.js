import React from 'react';

const Bemvindo = (props) => {
return (<div> 
<h2>Bem-vindo {props.nome}</h2>
<h2>Tenho: {props.idade}</h2>
</div>)

}

//componente principal - cria  pagina principal
function App() {
  return(
    <div>
      Olá Mundo!
      <Bemvindo nome="Lucas" idade="24"/>
      <Bemvindo nome="sara" idade="21"/>
      <Bemvindo nome="leo" idade="18"/>
   <h1>Olá mundo</h1>
   </div>
  )
}

export default App;