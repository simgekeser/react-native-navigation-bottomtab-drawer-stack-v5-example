import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import Header from '../Header/Header';
export default function Contact({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Contact" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Contact here!</Text>
        <Button
          title="Go Contact Details"
          onPress={() => navigation.navigate('Contact Details')}
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
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
