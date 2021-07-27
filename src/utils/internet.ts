import NetInfo from '@react-native-community/netinfo';

export async function isConnected() {
  return (await NetInfo.fetch()).isConnected;
}
