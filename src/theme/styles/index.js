import {moderateVerticalScale} from 'react-native-size-matters';

export const SIZES_FACTOR = 0.3;
export const STANDARD_WIDTH_MOBILE = 750;
export const ResizeValue = value => moderateVerticalScale(value, SIZES_FACTOR);

export const WebResizeValue = (size, windowWidth, dividend = 1500) =>
  (parseInt(size) * windowWidth) / dividend;
