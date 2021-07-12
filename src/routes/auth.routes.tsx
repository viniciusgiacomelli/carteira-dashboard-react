import React from 'react';
import { Switch, Route } from 'react-router';

import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route component ={SignIn} />
    </Switch>

);

export default AuthRoutes;