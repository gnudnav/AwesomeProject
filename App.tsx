import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Lab1 from './src/Lab/Lab1/Lab1';
import Asm from './srcAsm/components/Asm';
import Camera from './src/Lab/Lab1/Camera';
import Video from './src/Lab/Lab1/Video';
import Lab4 from './src/Lab/Lab1/Lab4';
import Seeach from './src/Lab/Lab1/Seeach';
import Random_Number from './src/Lab/demo/Random_Number';
import Comp2Lab1 from './src/Lab/Lab1/Comp2Lab1';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Asm />
    </SafeAreaView>
  );
}

export default App;
