import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Componente from './components/Componente';
import Tabuada from './components/Tabuada';
import tabuad from './components/Tabuada';

export default function App() {
  const [num, setNum] = useState(0);
  return (
    <View style={styles.container}>
      <Componente nome="Sophia" idade="16"/>

      <View style={styles.row}>
        <Text style={styles.texto}>Número: </Text>
        <TextInput
          style={styles.input}
          value={num}
          onChangesText={(value)=>setNum(value)}>
        </TextInput>
      </View>
      <Tabuada num={num}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'justify',
    justifyContent: 'justify',
    marginLeft: '10%',
  },
  row:{
    width: '100%',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    marginTop:'1%',
    fontSize: 20,
    borderRadius: 6,
  },
  texto: {
    fontSize: 30,
  },
});
