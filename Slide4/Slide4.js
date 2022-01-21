// rnfs
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

export default function Slide4() {
  const [data, setdata] = useState([
    {
      id: '1',
      title: 'Học bài',
    },
    {
      id: '2',
      title: 'Đá bóng',
    },
    {
      id: '3',
      title: 'Ăn tối',
    },
  ]);

  const [checkUpdate, setcheckUpdate] = useState(false);
  const [_idUpdate, set_idUpdate] = useState();

  const [text, settext] = useState();
  // add

  const add = () => {
    if (checkUpdate == false) {
      const array = data;
      const _id = array.length + 1;

      setdata([{id: _id, title: text}, ...data]); // thêm item vào đầu array
      settext('');
      Alert.alert('Thông báo', 'Thêm thành công!');
      // console.log(data);
    } else {
      const array = data;
      const id = _idUpdate;
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (id == element.id) {
          element.title = text;
        }
      }
      setdata(Array.from(array));
      setcheckUpdate(false);
      settext('');
      Alert.alert('Thông báo', 'Update thành công!');
    }
  };
  const remove = id => {
    const array = data;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (id == element.id) {
        array.splice(i, 1); // xóa đi phần tử đầu tiên, sau i
      }
    }
    setdata(Array.from(array));
    Alert.alert('Thông báo', 'Xóa thành công!');
  };
  const update = id => {
    const array = data;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (id == element.id) {
        setcheckUpdate(true);
        settext(element.title);
        set_idUpdate(id);
      }
    }
  };
  return (
    <View style={styles.container}>
      {/* Input */}
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={value => {
          settext(value);
        }}
      />
      {/* Button */}
      <Pressable
        style={{
          width: 200,
          height: 48,
          backgroundColor: '#ffc',
          borderRadius: 5,
          justifyContent: 'center',
          padding: 10,
          marginHorizontal: 5,
          alignItems: 'center',
          marginLeft: 110,
        }}
        android_ripple={{color: 'red'}}
        onPress={() => {
          add();
        }}>
        <View>
          <Text style={styles.textButton}>{checkUpdate ? 'Sửa' : 'Thêm'}</Text>
        </View>
      </Pressable>
      {/* List */}
      <FlatList
        style={{marginTop: 5}}
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={{flexDirection: 'row'}}>
                <Pressable
                  style={styles.button}
                  android_ripple={{color: '#00f'}}
                  onPress={() => {
                    update(item.id);
                  }}>
                  <View>
                    <Text style={styles.textButton}>Sửa</Text>
                  </View>
                </Pressable>
                <Pressable
                  style={styles.button}
                  android_ripple={{color: 'gray'}}
                  onPress={() => {
                    remove(item.id);
                  }}>
                  <View>
                    <Text style={styles.textButton}>Xoá</Text>
                  </View>
                </Pressable>
              </View>
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
  input: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 15,
    fontSize: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
  },
  button: {
    backgroundColor: '#ffc',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5,
  },
  textButton: {
    fontSize: 20,
    color: '#000',
  },
});
