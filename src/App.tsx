import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/Layout';
import { dark } from './styles/themes/dark';
import List from './pages/List';

const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Layout>
                <List/>
            </Layout>
        </ThemeProvider>
    )
}

export default App;