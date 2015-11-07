import 'angular-material/angular-material.css';

import angular from 'angular';
import ngMaterial from 'angular-material';

import routing from './app.config';

angular.module('app', [ngMaterial])
    .config(routing);
