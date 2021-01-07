import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Produto from './pages/Produto';


import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/produto/:id" component={Produto}/>
                <Route path="*" component={Erro /* tem que estar apos todas as outras paginas, caso solicite uma pagina que não existe */}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
