import * as React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from '~src/containers/HomeContainer/';
import Icon from 'react-native-vector-icons/Ionicons';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const CustomTabBarIcon = (name, size) => {
  const icon = ({tintColor}) => (
    <Icon name={name} size={size} color={tintColor} />
  );
  icon.propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  return icon;
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: CustomTabBarIcon('menu', 20),
        }}
        component={HomeContainer}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: CustomTabBarIcon('settings-outline', 20),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
