import { Dimensions, NativeModules, Platform } from 'react-native';
const { StatusBarManager } = NativeModules;
export const IS_ANDROID = Platform.OS == 'android';
export const IS_IOS = Platform.OS == 'ios';
export const STATUS_BAR_HEIGHT = IS_ANDROID ? StatusBarManager.HEIGHT : StatusBarManager;

export const SCREEN_WIDTHSCREEN = Dimensions.get('screen').width;
export const SCREEN_WIDTHWINDOW = Dimensions.get('window').width;

export const SCREEN_HEIGHTSCREEN = Dimensions.get('screen').height;
export const SCREEN_HEIGHTWINDOW = Dimensions.get('window').height;



export const HEIGHT_INPUT = 40;
export const RADIUS_INPUT = 20;
export const BASE_PADDING = 20;