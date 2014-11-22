import 'angular'
import 'angular-ui-router'

import homeConf from 'apps/home/home.conf'

angular
.module('home', [
  'ui.router'
])
.config( homeConf );

