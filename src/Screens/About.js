import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import Header from '../Header/Header';
export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="About" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>About here!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
