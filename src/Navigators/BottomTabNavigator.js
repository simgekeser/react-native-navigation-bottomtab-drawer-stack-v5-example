import * as React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../Screens/About';
import {HomeStackNavigator, ContactStackNavigator} from './StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#f0f',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-book'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name={
                Platform.OS === 'ios'
                  ? 'ios-information-circle'
                  : 'md-information-circle'
              }
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function BottomTabNavigator() {
  return <MyTabs />;
}
