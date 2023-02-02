import { useState } from 'react';
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
    userName: yup.string().required('Requerido'),
    email: yup.string().email('Email invalido').required('Requerido'),
    password: yup.string().required('Debe de indicar la clave'),
    pwdConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Las claves no coinciden')
      .required('Obligatorio'),
  })
  .required();

type Props = {};
export const RegisterScreen = () => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
      pwdConfirm: '',
    },
    resolver: yupResolver(schema),
  });

  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const handleRegister = () => {
    console.warn('Creand el user');
  };

  const goToPolicy = () => {
    console.warn('navegar a la pagina de terminos y politicas');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>CREAR CUENTA</Text>
        <CustomInput
          name="userName"
          control={control}
          placeholder="Nombre del Usuario"
        />
        <CustomInput name="email" control={control} placeholder="Email" />

        <CustomInput
          name="password"
          control={control}
          placeholder="password"
          secureTextEntry
        />
        <CustomInput
          name="pwdConfirm"
          control={control}
          placeholder="Confirmar clave"
          secureTextEntry
        />
        <CustomButton
          onPress={handleSubmit(handleRegister)}
          text="Registrarse"
        />

        <SocialLoging />

        <Text style={styles.text}>
          Al presionar registrarse esta aceptando los{' '}
          <Text onPress={goToPolicy} style={styles.link}>
            terminos y politicas{' '}
          </Text>
          privacidad
        </Text>

        <Text style={styles.text}>
          ¿Ya formas parte de FindYourDreamJob?{' '}
          <Text onPress={goToLogin} style={styles.link}>
            Iniciar sesión
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
    backgroundColor: '#a3a3a3',
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
    maxWidth: 75,
    height: 75,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginBottom: 50,
  },
});
