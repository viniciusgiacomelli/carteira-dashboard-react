import React, { useState } from 'react';
import Toggle from '../Toggle';

import { 
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';

import { ThemeContext } from 'styled-components';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../hooks/auth';
import { useTheme } from '../hooks/themes';

import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter
 } from './styles';

const Aside: React.FC = () => {
    
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(()=> theme.title === 'dark' ? true : false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>

            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    { toggleMenuIsOpened ? <MdClose/> : <MdMenu/> }
                </ToggleMenu>

                <LogoImg src={logoImg} alt="Logo minha carteira"/>
                <Title> Minha Carteira</Title>
            </Header>

            <MenuContainer>

                <MenuItemLink href="/">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>

                <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                    <Toggle
                        labelLeft="Light"
                        labelRight="Dark"
                        checked={darkTheme}
                        onChange={handleChangeTheme}
                    />
                </ThemeToggleFooter>

            </MenuContainer>

        </Container>
    );
}

export default Aside;