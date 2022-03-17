import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, getUserStatus} from './redux';
import {LoginScreen} from './screens/auth/LoginScreen';
import DetailMovieScreen from './screens/detail/DetailMovieScreen';
import DetailTVScreen from './screens/detail/DetailTVScreen';
import MainScreen from './screens/main';
import {RootStackParamList} from './screens/root/RootStackPrams';
import SearchScreen from './screens/search/SearchScreen';

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
        <Stack.Screen
          options={{headerShown: false}}
          name='Search'
          component={SearchScreen}
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

export default AppContainer;
