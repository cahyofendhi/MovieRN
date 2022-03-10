import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './src/screens/main';
import AuthScreen from './src/screens/auth';
import {RootStackParamList} from './src/screens/RootStackPrams';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import DetailMovieScreen from './src/screens/detail/DetailMovieScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Auth"
            component={AuthScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Main"
            component={MainScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="DetailMovie"
            component={DetailMovieScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
