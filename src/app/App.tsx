import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainRoutes} from '../common/routing/routes';
import {MainStackParamList} from '../common/routing/types';
import Auth from '../features/auth/Auth';
import WalkThrough from '../features/walkthrough/WalkThrough';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen
          name={MainRoutes.WALKTHROUGH}
          component={WalkThrough}
        />
        <MainStack.Screen name={MainRoutes.AUTH} component={Auth} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
