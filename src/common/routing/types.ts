import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthRoutes, MainRoutes} from './routes';

// Main Stack
export type MainStackParamList = {
  [MainRoutes.WALKTHROUGH]: undefined;
  [MainRoutes.AUTH]: undefined;
  [MainRoutes.HOME]: undefined;
};

export type MainNavigationProp<
  RouteName extends keyof MainStackParamList = MainRoutes,
> = NativeStackNavigationProp<MainStackParamList, RouteName>;

// Auth Stack
export type AuthStackParamList = {
  [AuthRoutes.SIGN_IN]: undefined;
  [AuthRoutes.SIGN_UP]: undefined;
  [AuthRoutes.FORGOT_PASSWORD]: undefined;
  [AuthRoutes.CHANGE_PASSWORD]: undefined;
};

export type AuthNavigationProp<
  RouteName extends keyof AuthStackParamList = AuthRoutes,
> = NativeStackNavigationProp<AuthStackParamList, RouteName>;
