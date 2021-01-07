import React, { Component } from 'react';
import './style.css';


//https://sujeitoprogramador.com/rn-api/?api=posts


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nutri: []
        };

    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url)//faz a requisição pela url
        .then((r)=> r.json()) //then recebe a resposta, usamos para acessa a resposta do metodo/ .json transforma a resposta em um objeto json
        .then((json)=>{// o then só recebe a resposta em caso de sucesso na execução do metodo
            let state = this.state;
            state.nutri = json;// a variável nutri do state desta classe recebe o objeto json da requisição http
            this.setState(state);
            console.log(json);
        })        

    }

     render(){
        return(
            <div className="container">
                <header>
                    <strong>React Nutri</strong>
                </header>

                {this.state.nutri.map((item)=>{// map varre o array
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo"> {item.titulo} </strong>
                            <img src={item.capa} className="capa" />
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a className="botao" href="#">Acessar</a>
                        </article>
                    );
                })}

            </div>         
        );
    }
}

export default App;