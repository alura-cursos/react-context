import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "pages/Login";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { useState } from "react";
import { UserContext } from "common/context/User";

function Router() {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);
  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
          <Route exact path="/" component={Login} />
        </UserContext.Provider>
        <Route exact path="/feira">
          <Feira />
        </Route>
        <Route exact path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
