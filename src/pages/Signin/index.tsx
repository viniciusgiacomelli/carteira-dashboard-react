import React from 'react';

import logo from '../../assets/logo.svg';

import { 
    Container,
    Logo,
    Form,
    FormTitle
} from './styles';

const SignIn: React.FC = () => {
    return (
        <Container>

            <Logo>
                <img src={logo} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form>
                <FormTitle>
                    Entrar
                </FormTitle>

                <input type="text"></input>
                <input type="text"></input>

                <button type="submit">Acessar</button>
            </Form>

        </Container>
    );
}

export default SignIn;