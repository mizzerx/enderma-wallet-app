/**
 * @format
 */

import React from 'react';
import {useTranslation} from 'react-i18next';
import {Platform, StyleSheet} from 'react-native';
import xml from '../../common/assets/svgs/xml';
import Container from '../../common/components/Container';
import SvgXmlImage from '../../common/components/SvgXmlImage';
import {ms, s} from '../../common/utils/scalingUtils';
import AuthHeader from './components/AuthHeader';

const SignIn: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Container
      style={styles.container}
      safeAreaTop={Platform.OS === 'ios'}
      safePadding>
      <AuthHeader
        title={t('walkthrough.welcome', {content: t('walkthrough.back')})}
        subtitle={t('walkthrough.hi_there', {
          content: t('walkthrough.sign_to_continue'),
        })}
      />
      <SvgXmlImage xml={xml.illustration5} width={s(327)} height={s(184)} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(24),
    paddingTop: ms(24),
  },
});

export default SignIn;
