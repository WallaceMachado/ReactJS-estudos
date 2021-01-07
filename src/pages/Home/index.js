import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // para permitir a rotar


class Home extends Component{
     render(){
        return(
            <div>
               <h2>Bem-vindo a pagina Home....</h2> <br/>
               <Link to="/sobre" >Ir para Sobre</Link>  {/* LINK está no import acima  */}
            </div>         
        );
    }
}

export default Home;