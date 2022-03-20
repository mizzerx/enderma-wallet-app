/**
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthRoutes} from '../../common/routing/routes';
import {AuthStackParamList} from '../../common/routing/types';
import SignIn from './SignIn';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const Auth: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={AuthRoutes.SIGN_IN} component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default Auth;
