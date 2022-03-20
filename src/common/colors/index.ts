import {Appearance} from 'react-native';
import lightColors from './lightColors';
import {Colors} from './types';

const colors: Colors =
  Appearance.getColorScheme() === 'light' ? lightColors : lightColors;

export default colors;
