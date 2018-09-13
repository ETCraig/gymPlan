import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Account from './Components/Account/Account';
import Login from './Components/Login/Login';
import Routine from './Components/Routine/Routine';
import Routines from './Components/Routines/Routines';
import Stats from './Components/Stats/Stats';
import Contact from './Components/Contact/Contact';
import Create from './Components/Create/Create';
import Step1 from './Components/Step1/Step1';
import Step2 from './Components/Step2/Step2';
import Step3 from './Components/Step3/Step3';
import Step4 from './Components/Step4/Step4';
import BMIcalc from './Components/BMI/BMIcalc';
import Store from './Components/Store/Store';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Purchase from './Components/Purchase/Purchase';

export default (
    <Switch>
        <Route component={Login} exact path='/' />
        <Route component={Stats} path='/Stats' />
        <Route component={Account} path='/Account' />
        <Route component={Contact} path='/Contact-us' />
        <Route component={Routines} path='/Routines' />
        <Route component={Create} path='/Create' />
        <Route component={Routine} path='/Routine/:routine_id' />
        <Route component={Step1} path='/Step1/:routine_id' />
        <Route component={Step2} path='/Step2/:routine_id/:muscle_group' />
        <Route component={Step3} path='/Step3/:routine_id/:exercise_id' />
        <Route component={Step4} path='/Step4/:routine_id' />
        <Route component={BMIcalc} path='/BMIcalc' />
        <Route component={Store} path='/Store' />
        <Route component={Products} path='/Products' />
        <Route component={Cart} path='/Cart' />
        <Route component={Purchase} path='/Purchase' />
    </Switch>
);