/* eslint-disable require-jsdoc */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './src/screens/main';
import {RootStackParamList} from './src/screens/RootStackPrams';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {getUserStatus, RootState, store} from './src/redux';
import DetailMovieScreen from './src/screens/detail/DetailMovieScreen';
import DetailTVScreen from './src/screens/detail/DetailTVScreen';
import {LoginScreen} from './src/screens/auth/LoginScreen';
import {View} from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

interface AppNavigationProps {
  isLogin: boolean
}

const AppNavigation: React.FC<AppNavigationProps> = ({isLogin}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = {isLogin ? 'Main' : 'Login'}>
        <Stack.Screen
          options={{headerShown: false}}
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name='Main'
          component={MainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name='DetailMovie'
          component={DetailMovieScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name='DetailTV'
          component={DetailTVScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppContainer: React.FC = () => {
  const dispatch = useDispatch();
  const {isRequest, isLogin} = useSelector((state: RootState) => state.main);

  useEffect(() => {
    dispatch(getUserStatus());
  }, []);

  return (
    <View style={{flex: 1}}>
      {
        isRequest ?
        <View /> :
        <AppNavigation isLogin={isLogin}/>
      }
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
