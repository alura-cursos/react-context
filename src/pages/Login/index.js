import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { UserContext } from "common/context/User";

function Login() {
  const history = useHistory();
  return (
    <Container>
      <UserContext.Consumer>
        {({nome, setNome, saldo, setSaldo}) => (
          <>
            <Titulo>Insira o seu nome</Titulo>
            <InputContainer>
              <InputLabel>Nome</InputLabel>
              <Input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Saldo</InputLabel>
              <Input
                type="number"
                value={saldo}
                onChange={(e) => setSaldo(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">R$</InputAdornment>
                }
              />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/feira")}
            >
              Avançar
            </Button>
          </>
        )}
      </UserContext.Consumer>
    </Container>
  );
}

export default Login;
