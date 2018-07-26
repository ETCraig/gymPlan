import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Account from './Components/Account';
import Goals from './Components/Goals';
import Login from './Components/Login';
import Routine from './Components/Routine';
import Routines from './Components/Routines';
import Stats from './Components/Stats';

import Step1 from './Components/Create/Step1';
import Step2 from './Components/Create/Step2';
import Step3 from './Components/Create/Step3';

export default (
    <Switch>
        <Route component={Login} exact path='/' />
        <Route component={Goals} path='/Goals' />
        <Route component={Stats} path='/Stats' />
        <Route component={Account} path='/Account' />
        <Route component={Routines} path='/Routines' />
        <Route component={Routine} path='/Routine' />
        <Route component={Step1} path='/Step1' />
        <Route component={Step2} path='/Step2' />
        <Route component={Step3} path='/Step3' />
    </Switch>
);