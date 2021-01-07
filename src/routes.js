import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //necessário instalar npm install react-router-dom
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>{/*garante que só será carregada uma rota por vez */}
                <Route exact path="/" component={Home} />
                <Route path="/sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
