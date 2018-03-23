import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $darkseagreen: '#698b69',
  $white: '#FFFFFF',
});
 
export default () => <Home />;
