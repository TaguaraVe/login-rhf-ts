import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import miImagen from '../assets/images/home2.jpg';

export function LandingScreen() {
  const navigation = useNavigation();

  const onPressLogin = (): void => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={miImagen}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={onPressLogin}
            title="Ingresar"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 256,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 50,
  },
});
