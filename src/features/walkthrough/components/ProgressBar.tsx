/**
 * @format
 */

import React from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import colors from '../../../common/colors';
import {ms, s} from '../../../common/utils/scalingUtils';

interface ProgessBarProps {
  scrollX: Animated.AnimatedInterpolation;
}

const ProgressBar: React.FC<ProgessBarProps> = props => {
  const {width} = Dimensions.get('window');
  const {scrollX} = props;
  const slider = [
    scrollX.interpolate({
      inputRange: [0, width, width * 2],
      outputRange: [ms(43), 0, 0],
    }),
    scrollX.interpolate({
      inputRange: [0, width, width * 2],
      outputRange: [0, ms(43), 0],
    }),
    scrollX.interpolate({
      inputRange: [0, width, width * 2],
      outputRange: [0, 0, ms(43)],
    }),
  ];

  const renderSlider = (index: number) => {
    return (
      <View
        style={[styles.sliderContainer, {backgroundColor: colors.neutral_5}]}>
        <Animated.View
          style={[
            styles.slider,
            {backgroundColor: colors.primary_purple},
            {width: slider[index]},
          ]}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderSlider(0)}
      <View style={styles.midleSlider}>{renderSlider(1)}</View>
      {renderSlider(2)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: ms(40),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sliderContainer: {
    width: s(56),
    height: s(5),
    borderRadius: ms(8),
  },
  slider: {
    width: 0,
    height: '100%',
    borderRadius: ms(8),
  },
  midleSlider: {
    marginHorizontal: ms(8),
  },
});

export default ProgressBar;
