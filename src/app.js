import 'angular-material/angular-material.css';

import angular from 'angular';
import material from 'angular-material';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import services from './services/services';
import components from './components/components';

import home from './modules/home/home';

angular.module('app', [material, uirouter, home, services, components])
    .config(routing);
