import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "pages/Login";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { useState } from "react";

function Router(){
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);    
  return (
      <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Login 
              nome={nome} 
              setNome={setNome}
              saldo={saldo}
              setSaldo={setSaldo}
            />
          </Route>
          <Route exact path='/feira'>
            <Feira />
          </Route>
          <Route exact path='/carrinho'>
            <Carrinho />
          </Route>
      </Switch>
      </BrowserRouter>
  )    
}

export default Router;
