import React, { Component } from 'react';
import TodoItems from '../TodoItems';


class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            tarefa: '',
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value, // adiconado a chave text e o valor do campo this._tarefaInput.value
                key: Date.now() //chave será uma data com hora 
            };
            this.setState({ items: [...state.items, newItem] }); // ... é para adicionar no array e não substituir

        }


        e.preventDefault();// para não atualizar automaticamente a tela depois da ação acima
        this.setState({ tarefa: '' });// para limpar o campo apos ação
    }

    log(){
        console.log(this.state.items); // para mostrar no console inspecionar no navegador do usuario o array
    }

    deleteItem(key){
        console.log('Item a ser deletado: ' + key);
        let filtro = this.state.items.filter( (item) =>{
            // Retorna apenas os items que tiverem a key diferente da key que recebe por parametro na funcao
            return(item.key !== key);
        })
        this.setState({items: filtro});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addItem /* acionado pelo submit do button abaixo */}>
                    <input type="text" placeholder="Nova Tarefa?" name="tarefa"
                           value={this.state.tarefa} onChange={ (ev) => this.setState({tarefa: ev.target.value})}
                           ref={ (event) => this._tarefaInput = event /*referenciando o evento acima */}  />
                    <button type="submit"> {/*envia ação para onSubmit acima*/ }
                        Adicionar
                    </button>       
                </form>

                <button onClick={this.log}>LOG</button>


                <TodoItems lista={this.state.items /* passa por props o array items para a classe todoItems */} delete={this.deleteItem /* recebe a props enviada do TodoItems */}/>
              

            </div>
        )
    }
}

export default TodoList;