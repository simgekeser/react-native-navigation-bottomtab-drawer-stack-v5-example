import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeDetails from '../Screens/HomeDetails';
import Home from '../Screens/Home';
import Contact from '../Screens/Contact';
import ContactDetails from '../Screens/ContactDetails';

const Stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});
const navDetailOptionHandler = () => ({
  headerTitle: '',
});
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={navOptionHandler} />
      <Stack.Screen
        name="Home Details"
        component={HomeDetails}
        options={navDetailOptionHandler}
      />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Contact Details"
        component={ContactDetails}
        options={navDetailOptionHandler}
      />
    </Stack.Navigator>
  );
};

export {HomeStackNavigator, ContactStackNavigator};
