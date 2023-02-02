import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import logo from '../assets/images/logo.png';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import SocialLoging from '../components/SocialLoging';

const schema = yup
  .object({
    email: yup.string().email('Email invalido').required('Requerido'),
    password: yup.string().required('Debe de indicar la clave'),
  })
  .required();

export const LoginScreen = () => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    navigation.navigate('Home');
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>INGRESAR</Text>

        <CustomInput name="email" control={control} placeholder="email" />
        <CustomInput
          name="password"
          control={control}
          placeholder="password"
          secureTextEntry
        />

        <CustomButton onPress={handleSubmit(handleLogin)} text="Aceptar" />

        <CustomButton
          onPress={goToForgotPassword}
          text="¿Olvidó su clave de acceso?"
          type="Link"
        />

        <SocialLoging />

        <Text style={styles.text}>
          ¿No tiene cuenta?{' '}
          <Text onPress={goToRegister} style={styles.link}>
            Afiliese aquí
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    color: 'blue',
  },
  logo: {
    width: '100%',
    maxWidth: 100,
    height: 100,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginBottom: 50,
  },
});
