import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './MainTabNavigator';
import LoggedOutStackNavigator from '~src/navigators/LoggedOutStackNavigator';

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default class LoggedInDrawerNavigator extends React.Component {
  state = {
    loggedIn: true,
  };
  render() {
    const {loggedIn} = this.state;
    return (
      <NavigationContainer>
        {!loggedIn ? (
          <LoggedOutStackNavigator />
        ) : (
          <Drawer.Navigator
            //        defaultStatus="open"
            screenOptions={{
              headerShown: false,
            }}>
            <Drawer.Screen name="Home" component={MainTabNavigator} />
            <Drawer.Screen
              name="Notifications"
              component={NotificationsScreen}
            />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    );
  }
}
