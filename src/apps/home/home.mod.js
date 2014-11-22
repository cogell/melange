import 'angular'
import 'angular-route'

import homeConf from 'apps/home/home.conf'

angular
.module('home', [
  'ngRoute'
])
.config( homeConf );

