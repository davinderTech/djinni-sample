import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeScreen from './screen/HomeScreen';
import {isWebPlatform} from './utils/common';

const App = () => {
  const renderUI = () => (
    <View style={{flex: 1}}>
      <HomeScreen />
    </View>
  );

  if (isWebPlatform()) {
    renderUI();
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {renderUI()}
    </SafeAreaView>
  );
};

export default App;
