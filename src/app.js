import 'angular-material/angular-material.css';

import angular from 'angular';
import material from 'angular-material';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './modules/home';

angular.module('app', [material, uirouter, home])
    .config(routing);
