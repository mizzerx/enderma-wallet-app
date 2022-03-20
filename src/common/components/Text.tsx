/**
 * @format
 */

import React from 'react';
import {Text as _Text, TextProps as _TextProps} from 'react-native';
import colors from '../colors';

interface TextProps extends _TextProps {
  primary?: boolean;
  secondary?: boolean;
}

const FONT_FAMILY = 'Poppins';

const Text: React.FC<TextProps> = props => {
  const {children, style, primary, secondary, ...rest} = props;

  return (
    <_Text
      {...rest}
      style={[
        {fontFamily: FONT_FAMILY},
        secondary && {color: colors.neutral_2},
        primary && {color: colors.neutral_1},
        style,
      ]}>
      {children}
    </_Text>
  );
};

export default Text;
