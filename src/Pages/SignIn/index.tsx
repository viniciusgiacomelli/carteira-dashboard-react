import React, {useState} from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.svg';

import { 
    Container,
    Logo,
    Form,
    FormTitle
} from './styles';

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const{signIn}= useAuth();

    return (
        <Container>

            <Logo>
                <img src={logo} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={()=>signIn(email, password)} >
                <FormTitle>
                    Entrar
                </FormTitle>

                <Input
                    type="text"
                    placeholder="email"
                    onChange={ (e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="senha"
                    onChange={ (e) => setPassword(e.target.value)}
                />

                <Button type="submit">Acessar</Button>
            </Form>
            <h2 id="instruction">Não precisa preencher. Basta clicar em Acessar</h2>

        </Container>
    );
}

export default SignIn;