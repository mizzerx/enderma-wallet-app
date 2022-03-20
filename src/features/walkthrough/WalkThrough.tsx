/**
 * @format
 */

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Animated,
  Dimensions,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
  View,
} from 'react-native';
import PagerView, {
  PagerViewOnPageScrollEventData,
  PagerViewOnPageSelectedEvent,
} from 'react-native-pager-view';
import xml from '../../common/assets/svgs/xml';
import Container from '../../common/components/Container';
import PrimaryButton from '../../common/components/PrimaryButton';
import {MainRoutes} from '../../common/routing/routes';
import {MainNavigationProp} from '../../common/routing/types';
import {ms} from '../../common/utils/scalingUtils';
import ProgressBar from './components/ProgressBar';
import WalkThroughChild from './components/WalkThroughChild';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const WalkThrough: React.FC = () => {
  const {width} = Dimensions.get('window');
  const {t} = useTranslation();
  const mainNavigation = useNavigation<MainNavigationProp>();
  const [currentPage, setCurrentPage] = React.useState(0);
  const scrollOfsetAnimatedValue = useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = useRef(new Animated.Value(0)).current;
  const scrollX = Animated.add(
    scrollOfsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange: [0, 3],
    outputRange: [0, width * 3],
  });

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental?.(true);
    }
  }, []);

  const handleOnPageScroll = useMemo(
    () =>
      Animated.event<PagerViewOnPageScrollEventData>(
        [
          {
            nativeEvent: {
              position: positionAnimatedValue,
              offset: scrollOfsetAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleOnPageSelected = useMemo(
    () =>
      ({nativeEvent}: PagerViewOnPageSelectedEvent) => {
        setCurrentPage(nativeEvent.position);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      },
    [],
  );

  const handleOnPressNext = () => mainNavigation.replace(MainRoutes.AUTH);

  return (
    <Container safeAreaTop={Platform.OS === 'ios'} safePadding>
      <ProgressBar scrollX={scrollX} />
      <AnimatedPagerView
        style={styles.pagerViewContainer}
        initialPage={0}
        onPageSelected={handleOnPageSelected}
        onPageScroll={handleOnPageScroll}>
        <WalkThroughChild
          key={1}
          xmlData={xml.illutration10}
          title={t('walkthrough.title_1')}
          subtitle={t('walkthrough.subtitle_1')}
        />
        <WalkThroughChild
          key={2}
          xmlData={xml.illustration11}
          title={t('walkthrough.title_2')}
          subtitle={t('walkthrough.subtitle_2')}
        />
        <WalkThroughChild
          key={3}
          xmlData={xml.illustration12}
          title={t('walkthrough.title_3')}
          subtitle={t('walkthrough.subtitle_3')}
        />
      </AnimatedPagerView>
      <View style={styles.buttonContainer}>
        {currentPage === 2 ? (
          <PrimaryButton
            title={t('walkthrough.get_start')}
            buttonType={'active'}
            onPress={handleOnPressNext}
          />
        ) : (
          <PrimaryButton
            title={t('walkthrough.get_a_card')}
            buttonType={'active'}
          />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  pagerViewContainer: {
    marginTop: ms(109),
    flex: 1,
  },
  buttonContainer: {
    marginHorizontal: ms(24),
    marginBottom: ms(70),
  },
});

export default WalkThrough;
