import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, StatusBar} from 'react-native';

export default function Lab3() {
  const [number1, setnumber1] = useState();
  const [number2, setnumber2] = useState();
  const [caculation, setcaculation] = useState('');
  const [stateNumber, setstateNumber] = useState(0);
  const [result, setresult] = useState(0);
  function setNumber(number) {
    if (stateNumber === 0) {
      setnumber1(number);
    } else {
      setnumber2(number);
    }
  }
  function setCaculation(caculation) {
    setcaculation(caculation);
    setstateNumber(1);
  }
  function Calculate() {
    if (number1 != null && number2 != null) {
      let num1 = number1;
      let num2 = number2;
      let ccl = caculation;

      switch (caculation) {
        case '/': {
          if (num2 == 0) {
            alert('Khong the chia cho 0');
          } else {
            setresult((num1 / num2).toFixed(12));
          }
          break;
        }
        case '*': {
          setresult(num1 * num2);
          break;
        }
        case '-': {
          setresult(num1 - num2);
          break;
        }
        case '+': {
          setresult(num1 + num2);
          break;
        }
        case '%': {
          if (num2 == 0) {
            alert('Khong the chia cho 0');
          } else {
            setresult(num1 % num2);
          }
          break;
        }

        default:
          break;
      }
    }
  }
  function Clear() {
    setnumber1();
    setnumber2();
    setcaculation('');
    setresult(0);
    setstateNumber(0);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.results}>
        <View style={styles.caculation}>
          <Text style={styles.textResult}>{number1}</Text>
          <Text style={styles.textResult}>{caculation}</Text>
          <Text style={styles.textResult}>{number2}</Text>
        </View>

        <Text style={styles.textResult} numberOfLines={1}>
          {result}
        </Text>
      </View>
      {/*  */}
      <View style={styles.row}>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>(</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>)</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setCaculation('%');
          }}>
          <Text style={styles.textButton}>%</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            Clear();
          }}>
          <Text style={styles.textButton}>AC</Text>
        </Pressable>
      </View>
      {/*  */}
      <View style={styles.row}>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(7);
          }}>
          <Text style={styles.textButton}>7</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(8);
          }}>
          <Text style={styles.textButton}>8</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(9);
          }}>
          <Text style={styles.textButton}>9</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setCaculation('/');
          }}>
          <Text style={styles.textButton}>/</Text>
        </Pressable>
      </View>
      {/*  */}
      <View style={styles.row}>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(4);
          }}>
          <Text style={styles.textButton}>4</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(5);
          }}>
          <Text style={styles.textButton}>5</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(6);
          }}>
          <Text style={styles.textButton}>6</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setCaculation('*');
          }}>
          <Text style={styles.textButton}>*</Text>
        </Pressable>
      </View>
      {/*  */}
      <View style={styles.row}>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(1);
          }}>
          <Text style={styles.textButton}>1</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(2);
          }}>
          <Text style={styles.textButton}>2</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(3);
          }}>
          <Text style={styles.textButton}>3</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setCaculation('-');
          }}>
          <Text style={styles.textButton}>-</Text>
        </Pressable>
      </View>
      {/*  */}
      <View style={styles.row}>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setNumber(0);
          }}>
          <Text style={styles.textButton}>0</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>.</Text>
        </Pressable>
        <Pressable
          style={styles.buttonEquals}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            Calculate();
          }}>
          <Text style={styles.textButton}>=</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{color: 'black', borderless: false}}
          onPress={() => {
            setCaculation('+');
          }}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  results: {
    width: '92%',
    height: 125,
    padding: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  caculation: {
    flexDirection: 'row',
  },
  textResult: {
    color: '#fff',
    fontSize: 40,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: '22%',
    height: 50,
    backgroundColor: 'gray',
    margin: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonEquals: {
    width: '22%',
    height: 50,
    backgroundColor: '#4387F4',
    margin: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
  },
});
