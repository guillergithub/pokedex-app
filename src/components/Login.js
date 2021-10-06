import { useHistory } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import pikachu from "../asserts/pikachu.png";
import logo from "../asserts/pocket-dex-logo.png";
import {
  FormContainer,
  GreetContainer,
  Input,
  InputContainer,
  LoginContainer,
  LogoContainer,
  PikachuContainer,
  Container,
  SignInContainer,
} from "./Login/styled";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, trainer } = useAuth();
  const history = useHistory();

  const onSubmit = (values) => {
    signIn(values.trainer, () => {});
  };

  useEffect(() => {
    if (trainer) {
      history.push("/pokedex");
    }
  }, [trainer, history]);

  return (
    <Container>
      <LoginContainer>
        <SignInContainer  onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <LogoContainer>
              <img alt="logo" src={logo} />
            </LogoContainer>
            <GreetContainer>
              <h1>Benvenido entrenador</h1>
              <h5>Inicia sesion para buscar tus pokemones favoritos</h5>
            </GreetContainer>
            <FormContainer>
              <Input placeholder="Add your name" {...register("trainer")} />
              <button className="btn btn-primary mt-3 btn-login">Entrar</button>
            </FormContainer>
          </InputContainer>
        </SignInContainer>

        <PikachuContainer>
          <img alt="pokemon-logo" src={pikachu} />
        </PikachuContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
