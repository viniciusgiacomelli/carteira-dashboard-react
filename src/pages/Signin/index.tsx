import React from 'react';

import Input from '../../components/Input';

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

            <Form onSubmit={()=>{}} >
                <FormTitle>
                    Entrar
                </FormTitle>

                <Input
                    type="email"
                    placeholder="email"
                    required
                />
                <Input
                    type="password"
                    placeholder="senha"
                    required
                />

                <button type="submit">Acessar</button>
            </Form>

        </Container>
    );
}

export default SignIn;