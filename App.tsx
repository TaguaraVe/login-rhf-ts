// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Navigation } from './navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Russo.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
