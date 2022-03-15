/* eslint-disable require-jsdoc */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {sessionLoginKey, setItem} from '../../data/session';
import {emailValidation} from '../../helper/validation';
import AppButton from '../components/Button';
import ProgressDialog from '../components/dialog/ProgressDialog';
import AppTextInput from '../components/text/AppTextInput';
import AppTextPassword from '../components/text/AppTextPassword';
import {DataText} from '../components/text/DataText';
import {RootStackParamList} from '../RootStackPrams';

type authScreenProps = StackNavigationProp<RootStackParamList, 'Login'>

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<authScreenProps>();
  const [email, setEmail] = useState<DataText>({value: '', error: null});
  const [password, setPassword] = useState<DataText>({value: '', error: ''});
  const [loading, setLoading] = useState(false);


  function onEmailChanged(value: string) {
    const message = emailValidation(value);
    setEmail({value: value, error: message});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      <AppTextInput
        returnKeyType="next"
        value={email.value}
        error={email.error}
        onChange={onEmailChanged}
        placeholder='Email'
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <AppTextPassword
        value={password.value}
        placeholderTextColor="gray"
        onChange={(dt) => setPassword({value: dt.value, error: dt.error})}
      />

      <AppButton
        style={{marginTop: 25}}
        enable={email.error == null && password.error == null}
        title="Login"
        onPress={() => {
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
        }
      />

      <ProgressDialog show={loading} onDismiss={() => setLoading(false)}/>

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
