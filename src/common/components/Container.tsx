/**
 * @format
 */

import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../colors';

interface ContainerProps extends ViewProps {
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
  safePadding?: boolean;
}

const Container: React.FC<ContainerProps> = props => {
  const {children, style, safeAreaTop, safeAreaBottom, safePadding, ...rest} =
    props;
  const insets = useSafeAreaInsets();

  return (
    <View
      {...rest}
      style={[
        styles.container,
        style,
        safeAreaTop &&
          (safePadding ? {paddingTop: insets.top} : {top: insets.top}),
        safeAreaBottom &&
          (safePadding
            ? {paddingBottom: insets.bottom}
            : {bottom: insets.bottom}),
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Container;
