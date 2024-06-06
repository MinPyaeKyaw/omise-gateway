import {SettingStackNavigation} from '../navigations';
import {
  Downloads,
  Exams,
  ForgetPassword,
  Home,
  Login,
  OTPVerification,
  ResetPassword,
  SignupOne,
  SignupTwo,
} from '../screens';
import {AUTH_SCREEN_NAMES, SCREEN_NAMES} from './const';

export const AUTH_SCREENS = [
  {
    name: AUTH_SCREEN_NAMES.LOGIN,
    screen: Login,
  },
  {
    name: AUTH_SCREEN_NAMES.FORGET_PASSWORD,
    screen: ForgetPassword,
  },
  {
    name: AUTH_SCREEN_NAMES.RESET_PASSWORD,
    screen: ResetPassword,
  },
  {
    name: AUTH_SCREEN_NAMES.SIGNUP1,
    screen: SignupOne,
  },
  {
    name: AUTH_SCREEN_NAMES.SIGNUP2,
    screen: SignupTwo,
  },
  {
    name: AUTH_SCREEN_NAMES.OTP,
    screen: OTPVerification,
  },
];

export const TABS = [
  {
    name: SCREEN_NAMES.HOME,
    icon: 'home',
    screen: Home,
  },
  {
    name: SCREEN_NAMES.EXAMS,
    icon: 'file-text',
    screen: Exams,
  },
  {
    name: SCREEN_NAMES.DOWNLOADS,
    icon: 'download-cloud',
    screen: Downloads,
  },
  {
    name: SCREEN_NAMES.SETTINGS,
    icon: 'settings',
    screen: SettingStackNavigation,
  },
];
