import {StyleSheet, FlatList, Text, Pressable, View} from 'react-native';
import React, {useState} from 'react';

export default function Slide5() {
  const [data, setdata] = useState([]);
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setdata(json));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Data</Text>
      {/* Button */}
      <Pressable
        style={styles.button}
        android_ripple={{color: '#ffcceeee'}}
        onPress={() => {
          getData();
        }}>
        <View>
          <Text style={styles.text}>Load Data</Text>
        </View>
      </Pressable>

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>Username: {item.username}</Text>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>
                Address street: {item.address.street}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#ffc',
    margin: 5,
    padding: 8,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#ffbccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});
