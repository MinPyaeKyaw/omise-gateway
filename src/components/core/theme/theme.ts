import {extendTheme} from 'native-base';
import {components} from './components';
import {colors} from './colors';
import {customFont} from './fonts';

export const theme = extendTheme({
  fontConfig: customFont.fontConfig,
  fonts: customFont.fonts,
  components,
  colors,
});
