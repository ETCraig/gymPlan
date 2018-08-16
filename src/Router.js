import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Account from './Components/Account';
import Goals from './Components/Goals';
import Login from './Components/Login';
import Routine from './Components/Routine';
import Routines from './Components/Routines';
import Stats from './Components/Stats';
import Contact from './Components/Contact';
import Create from './Components/Create';
import Step1 from './Components/Create/Step1';
import Step2 from './Components/Create/Step2';
import Step3 from './Components/Create/Step3';
import Step4 from './Components/Create/Step4';

export default (
    <Switch>
        <Route component={Login} exact path='/' />
        <Route component={Goals} path='/Goals' />
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
    </Switch>
);