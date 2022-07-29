import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Video from './Video';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const HomeStack = navigation => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
        //        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'home screen',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                //                color={colors.text}
                //                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
        //        options={{
        //          title: 'Awesome app',
        //        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
