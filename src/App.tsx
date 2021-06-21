import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import { dark } from './styles/themes/dark';

const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Layout/>
        </ThemeProvider>
    )
}

export default App;