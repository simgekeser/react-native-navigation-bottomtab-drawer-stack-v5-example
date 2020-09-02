import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Header from '../Header/Header';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Home" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Home here!</Text>
        <Button
          title="Go Details"
          onPress={() => navigation.navigate('Home Details')}
        />
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
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
