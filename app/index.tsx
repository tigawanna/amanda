import { Redirect } from 'expo-router';
import { Platform } from 'react-native';

export default function Home() {
    if (Platform.OS === 'web') {
        return <Redirect href={'/(drawer)/home'} />;
    }
  return <Redirect href={'/(tabs)/home'} />;
}
