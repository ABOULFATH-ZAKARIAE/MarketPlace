import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from '../login'
import superAdmin from '../Dashboard/superadmin'


function Routes () { 
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login" axact component={Login} />
            <Route path="/superadmin" axact component={superAdmin} />
        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;