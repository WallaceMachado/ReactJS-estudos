import React, { Component } from 'react';
import Membro from './components/Membro';//como não mencionei qual arquivo ele irá carregar automaticamente o index desta pasta

class App extends Component{

    render(){
        return(
            <div>
                <Membro nome="Visitante"/>
            </div>         
        );
    }
}

export default App;