import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MyText(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Text:</Text>
      <Text style={styles.text}>{props.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});
