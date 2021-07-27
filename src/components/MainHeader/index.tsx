import React, {useMemo, useState} from 'react';

import { useTheme } from '../../hooks/themes';


import Toggle from '../Toggle';
import {emojis} from '../../utils/emojis';

import { 
    Container, 
    Profile, 
    Welcome, 
    UserName
} from './styles';

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(()=> theme.title === 'dark' ? true : false );

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    };

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random()*emojis.length);
        return emojis[indice];
    },[]);

    return (
        <Container>

            <Toggle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá!{emoji}</Welcome>
                <UserName> Nome Do Usuario</UserName>
            </Profile>

        </Container>
    );
}

export default MainHeader;