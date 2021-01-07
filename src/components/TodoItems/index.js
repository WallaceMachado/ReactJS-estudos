import React, { Component } from 'react';

class TodoItems extends Component{

    constructor(props){
        super(props); // passa o props tbm para o super
        this.state={};

        this.delete = this.delete.bind(this);
    }

    delete(key){
        this.props.delete(key);// para o props para a classe TodoList:delete(Key);
    }

    render(){
        return(
            <div>
                <ul>
                    { this.props.lista.map((item)=>{
                        return(
                            <li onClick={ () => this.delete(item.key) /* esse techo só é executado após clicar  */} key={item.key /* key é passado com props */}> {item.text} </li>
                        );
                    }) }
                </ul>
            </div>
        );
    }
}

export default TodoItems;