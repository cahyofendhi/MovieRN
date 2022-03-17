/* eslint-disable require-jsdoc */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ERROR_MESSAGES, PASSWORD_MIN_LENGTH, REGEX} from '../../helper/validation';
import AppButton from '../components/Button';
import ProgressDialog from '../components/dialog/ProgressDialog';
import AppTextInput from '../components/text/AppTextInput';
import AppTextPassword from '../components/text/AppTextPassword';
import {RootStackParamList} from '../root/RootStackPrams';
import {useForm} from 'react-hook-form';
import {sessionLoginKey, setItem} from '../../data/session';


type authScreenProps = StackNavigationProp<RootStackParamList, 'Login'>


type FormData = {
  email: string
  password: string
  termAccepted: boolean
}


export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<authScreenProps>();
  const [loading, setLoading] = useState(false);

  const {control, formState, handleSubmit} = useForm<FormData>({mode: 'onChange'});

  function onSubmit(data: FormData) {
    setLoading(true);
    setTimeout(() => {
      setItem(sessionLoginKey, true);
      setLoading(false);
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Main'}],
        });
      }, 1000);
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      <AppTextInput
        name='email'
        control={control}
        error={formState.errors.email?.message}
        returnKeyType="next"
        placeholder='Email'
        textContentType="emailAddress"
        keyboardType="email-address"
        rules={{
          required: {value: true, message: ERROR_MESSAGES.REQUIRED},
          pattern: {message: ERROR_MESSAGES.EMAIL_INVALID, value: REGEX.email},
        }}
      />

      <AppTextPassword
        name='password'
        control={control}
        error={formState.errors.password?.message}
        placeholderTextColor="gray"
        rules={{
          required: {value: true, message: ERROR_MESSAGES.REQUIRED},
          minLength: {value: PASSWORD_MIN_LENGTH, message: ERROR_MESSAGES.PASSWORD_INVALID},
        }}
      />

      <AppButton
        style={{marginTop: 25}}
        enable={formState.isValid}
        title="Login"
        onPress={handleSubmit(onSubmit)}
      />

      <ProgressDialog show={loading}/>

    </View>


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 50,
  },
});
