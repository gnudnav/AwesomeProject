import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './srcAsm/redux/store';

import Asm from './srcAsm/components/Asm';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <Asm />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
