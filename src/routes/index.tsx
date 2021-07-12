import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Auth/>
    </BrowserRouter>
)

export default Routes;