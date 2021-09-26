import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '~src/screens/Login';

const Stack = createStackNavigator();

const LoggedOutStack = navigation => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        //        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        //        options={{
        //          title: 'Awesome app',
        //        }}
      />
    </Stack.Navigator>
  );
};

export default LoggedOutStack;
