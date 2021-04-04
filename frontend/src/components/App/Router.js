import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login';
import SellerLogin from '../sellerlogin';
import superAdmin from '../dashboard/superadmin';
import Addadmin from '../dashboard/admin-add-form';





function Routes () { 
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/seller/login" exact component={SellerLogin} />
            <Route path="/superadmin-dashboard" exact component={superAdmin} />
            <Route path="/addAdmin" exact component={Addadmin} />
        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;