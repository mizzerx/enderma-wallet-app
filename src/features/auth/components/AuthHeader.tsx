/**
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../../common/components/Text';
import {ms} from '../../../common/utils/scalingUtils';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = props => {
  const {title, subtitle} = props;
  return (
    <View style={styles.container}>
      <Text primary style={styles.title}>
        {title}
      </Text>
      <Text secondary style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: ms(40),
  },
  title: {
    fontSize: ms(24),
    fontWeight: '600',
    lineHeight: ms(40),
  },
  subtitle: {
    fontSize: ms(16),
    lineHeight: ms(24),
  },
});

export default AuthHeader;
