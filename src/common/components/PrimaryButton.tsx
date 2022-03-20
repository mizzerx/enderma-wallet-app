/**
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../colors';
import {ms, s} from '../utils/scalingUtils';
import Text from './Text';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  buttonType?: 'default' | 'active';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = props => {
  const {title, style, buttonType = 'default', ...rest} = props;
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.buttonContainer,
        style,
        buttonType === 'default'
          ? {backgroundColor: colors.special_purple}
          : {backgroundColor: colors.primary},
      ]}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.title,
          buttonType === 'default'
            ? {color: colors.primary}
            : {color: colors.neutral_4},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: s(52),
    justifyContent: 'center',
    borderRadius: s(12),
  },
  title: {
    textAlign: 'center',
    fontSize: ms(16),
    fontWeight: '600',
    lineHeight: ms(24),
  },
});

export default PrimaryButton;
