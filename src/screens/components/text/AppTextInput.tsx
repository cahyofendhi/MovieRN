import React from 'react';
import {ColorValue, KeyboardTypeOptions, ReturnKeyTypeOptions, StyleProp, StyleSheet, Text, TextInput, TextStyle, View} from 'react-native';


interface AppTextInputProps {
    placeholder: string
    value: string
    onChange: (value: string) => void
    style?: StyleProp<TextStyle> | undefined,
    placeholderTextColor?: ColorValue | undefined;
    keyboardType?: KeyboardTypeOptions | undefined;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    returnKeyType?: ReturnKeyTypeOptions | undefined;
    error: string | null;
    textContentType?:
        | 'none'
        | 'URL'
        | 'addressCity'
        | 'addressCityAndState'
        | 'addressState'
        | 'countryName'
        | 'creditCardNumber'
        | 'emailAddress'
        | 'familyName'
        | 'fullStreetAddress'
        | 'givenName'
        | 'jobTitle'
        | 'location'
        | 'middleName'
        | 'name'
        | 'namePrefix'
        | 'nameSuffix'
        | 'nickname'
        | 'organizationName'
        | 'postalCode'
        | 'streetAddressLine1'
        | 'streetAddressLine2'
        | 'sublocality'
        | 'telephoneNumber'
        | 'username'
        | 'password'
        | 'newPassword'
        | 'oneTimeCode'
        | undefined;

}

const AppTextInput: React.FC<AppTextInputProps> = ({
  placeholder,
  value,
  placeholderTextColor = 'gray',
  keyboardType,
  autoCapitalize = 'none',
  returnKeyType = 'none',
  textContentType = 'emailAddress',
  onChange,
  error,
  style,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputContainer, style]}
        returnKeyType={returnKeyType}
        value={value}
        onChangeText={onChange}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        textContentType={textContentType}
        keyboardType={keyboardType}
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
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'gray',
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  error: {
    marginTop: 8,
    fontSize: 12,
    color: 'red',
  },
});


export default AppTextInput;
