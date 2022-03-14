import {Dimensions, NativeModules} from 'react-native';
import DeviceInfo from 'react-native-device-info';
export const {width, height} = Dimensions.get('window');
export const {StatusBarManager} = NativeModules;
export const isTablet = DeviceInfo.isTablet;
