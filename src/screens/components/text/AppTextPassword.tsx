/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import {Control, Controller, RegisterOptions} from 'react-hook-form';
import {ColorValue, KeyboardTypeOptions, ReturnKeyTypeOptions, StyleProp, StyleSheet, Text, TextInput, TextStyle, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


interface AppTextPasswordProps {
    name: string
    placeholder?: string
    value?: string
    style?: StyleProp<TextStyle> | undefined,
    placeholderTextColor?: ColorValue | undefined;
    keyboardType?: KeyboardTypeOptions | undefined;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    returnKeyType?: ReturnKeyTypeOptions | undefined;
    control: Control<any>;
    error?: string | null;
    rules: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>,
}

const AppTextPassword: React.FC<AppTextPasswordProps> = ({
  name,
  placeholder = 'Password',
  value = '',
  placeholderTextColor = 'gray',
  keyboardType = 'default',
  autoCapitalize = 'none',
  returnKeyType = 'default',
  control,
  rules,
  error,
  style,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const icon = !showPassword ? 'eye-outline' : 'eye-off-outline';

  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        defaultValue={value}
        rules={rules}
        render={({field}) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input]}
                returnKeyType={returnKeyType}
                value={field.value}
                onChangeText={field.onChange}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                textContentType='password'
                keyboardType={keyboardType}
                secureTextEntry={showPassword}
                onBlur={field.onBlur}
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
          </>
        )}
      />
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
