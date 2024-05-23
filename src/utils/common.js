import {Platform} from 'react-native';
import {STANDARD_WIDTH_MOBILE} from '../theme/styles';

const isWebPlatform = () => Platform.OS === 'web';

const isMobileWebPlatform = currentWidth =>
  Platform.OS === 'web' && currentWidth > STANDARD_WIDTH_MOBILE;

export {isMobileWebPlatform, isWebPlatform};
