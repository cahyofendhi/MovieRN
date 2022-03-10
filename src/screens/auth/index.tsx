import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

function AuthScreen() {
  const navigation = useNavigation<authScreenProp>();
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          })
        }
      />
    </View>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
