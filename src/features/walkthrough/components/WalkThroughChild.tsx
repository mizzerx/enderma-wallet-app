/**
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import SvgXmlImage from '../../../common/components/SvgXmlImage';
import Text from '../../../common/components/Text';
import {ms, s} from '../../../common/utils/scalingUtils';

interface WalkThroughChildProps {
  key: number;
  xmlData: string;
  title: string;
  subtitle: string;
}

const WalkThroughChild: React.FC<WalkThroughChildProps> = props => {
  const {key, xmlData, title, subtitle} = props;
  return (
    <View style={styles.container} key={key} collapsable={false}>
      <SvgXmlImage xml={xmlData} width={s(327)} height={s(210)} />
      <Text style={styles.title} primary>
        {title}
      </Text>
      <Text style={styles.subTitle} secondary>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: ms(24),
  },
  title: {
    fontSize: ms(24),
    fontWeight: '600',
    lineHeight: ms(40),
    textAlign: 'center',
    marginTop: ms(24),
  },
  subTitle: {
    fontSize: ms(14),
    lineHeight: ms(21),
    textAlign: 'center',
    marginTop: ms(16),
  },
});

export default WalkThroughChild;
