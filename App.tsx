// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Navigation } from './navigation';

export default function App() {
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
