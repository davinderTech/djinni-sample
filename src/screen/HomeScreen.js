import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {isMobileWebPlatform} from '../utils/common';
import {mobileStyles, webStyles} from './styles';

const HomeScreen = () => {
  const {width, height} = useWindowDimensions();

  const styles = isMobileWebPlatform(width)
    ? webStyles(width, height)
    : mobileStyles(width, height);

  return (
    <View style={[styles.container]}>
      <Text style={styles.welcome}>Hello World</Text>
    </View>
  );
};

export default HomeScreen;
