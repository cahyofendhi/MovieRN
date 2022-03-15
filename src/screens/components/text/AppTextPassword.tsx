/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import {ColorValue, KeyboardTypeOptions, ReturnKeyTypeOptions, StyleProp, StyleSheet, Text, TextInput, TextStyle, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {passwordValidation} from '../../../helper/validation';
import {DataText} from './DataText';


interface AppTextPasswordProps {
    placeholder?: string
    value?: string
    onChange: (value: DataText) => void
    style?: StyleProp<TextStyle> | undefined,
    placeholderTextColor?: ColorValue | undefined;
    keyboardType?: KeyboardTypeOptions | undefined;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    returnKeyType?: ReturnKeyTypeOptions | undefined;

}

const AppTextPassword: React.FC<AppTextPasswordProps> = ({
  placeholder = 'Password',
  value = '',
  placeholderTextColor = 'gray',
  keyboardType = 'default',
  autoCapitalize = 'none',
  returnKeyType = 'default',
  onChange,
  style,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const icon = !showPassword ? 'eye-outline' : 'eye-off-outline';

  useEffect(() => {
    setText(value);
  }, []);

  function onChangePassword(value: string) {
    setText(value);
    const message = passwordValidation(value);
    if (message == null) {
      setError('');
      onChange({
        value: value,
        error: message,
      });
    } else {
      setError(message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          returnKeyType={returnKeyType}
          value={text}
          onChangeText={onChangePassword}
          autoCapitalize={autoCapitalize}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          textContentType='password'
          keyboardType={keyboardType}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity style={styles.icons} onPress={() => {
          setShowPassword(!showPassword);
        }}>
          <Ionicons
            size={20}
            name={icon}
            color={'#9e9e9e'}
          />
        </TouchableOpacity>
      </View>
      {
        (error != null && error.length) ?
        <Text style={styles.error}>{error}</Text> : <View/>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 20,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  icons: {
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'transparant',
    paddingHorizontal: 10,
  },
  error: {
    marginTop: 8,
    fontSize: 12,
    color: 'red',
  },
});


export default AppTextPassword;
