import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, Button, View} from 'react-native';
import MyText from './Props/MyText';

export default function App() {
  const [number, setnumber] = useState(0);
  const [name, setname] = useState('');

  return (
    <View style={styles.container}>
      <Text>Slide 3</Text>
      <MyText data="Le Hai Dang" />
      <Text>{number}</Text>
      <Text>{name}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={value => {
          setname(value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
});
