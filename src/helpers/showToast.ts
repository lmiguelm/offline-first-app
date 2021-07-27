import { ToastAndroid } from 'react-native';

export function showToastBottom(message: string) {
  ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
}
