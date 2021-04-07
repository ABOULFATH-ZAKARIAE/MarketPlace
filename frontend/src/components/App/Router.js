import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login';
import Seller_signup from '../sellersignup';
import SellerLogin from '../sellerlogin';
import superAdmin from '../dashboard/superadmin';
import Addadmin from '../dashboard/admin-add-form';
import Sellerconfirmation from '../dashboard/sellerconfirmation';
import SellerActivation from '../dashboard/sellerActivation';





function Routes () { 
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/seller/login" exact component={SellerLogin} />
            <Route path="/seller/signup" exact component={Seller_signup} />
            <Route path="/superadmin-dashboard" exact component={superAdmin} />
            <Route path="/addAdmin" exact component={Addadmin} />
            <Route path="/sellerconfirmation" exact component={Sellerconfirmation} />
            <Route path="/sellerActivation" exact component={SellerActivation} />
        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;