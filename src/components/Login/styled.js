import styled from "styled-components";

export  const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  background-color: #c54215;
`

export const LoginContainer = styled.div`
  background-color: #f66536;
  margin: auto;
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
`;

// export

// export const PokemonLogo
export const SignInContainer = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const PikachuContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  img {
    position: absolute;
    width: 480px;
    height: 500px;
    left: 0;
    bottom: 20px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 70%;
  img {
    width: 300px;
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 2px solid white;
  border-radius: 0;
  outline: none;
  color: white;

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

&:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

&::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}
`;

export const GreetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 60%;
  color: white;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: flex-start;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  width: 100%;  
  height: 100%;
  img {
      margin: 0 auto;
      height: 100%;
      width: 80%;
    }

`;
