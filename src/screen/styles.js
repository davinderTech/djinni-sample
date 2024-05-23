import {StyleSheet} from 'react-native';
import {ResizeValue, WebResizeValue} from '../theme/styles';

export const mobileStyles = (width, height) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      margin: ResizeValue(10),
    },
    welcome: {
      fontSize: ResizeValue(20),
      textAlign: 'center',
      margin: ResizeValue(10),
    },
  });

export const webStyles = (_width, _height) => {
  return StyleSheet.create({
    container: {
      width: _width <= 1000 ? '90%' : 900,
      alignSelf: 'center',
      backgroundColor: 'green',

      justifyContent: 'center',
      alignContent: 'center',
      height: _height,
    },
    welcome: {
      fontSize: '1em',
      textAlign: 'center',
      margin: WebResizeValue(20, _width),
    },
  });
};
