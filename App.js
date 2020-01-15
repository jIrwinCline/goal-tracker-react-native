import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
}

const addGoalHandler = () => {
  setCourseGoals((currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal}]));
}

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Course Goals' 
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <FlatList data={courseGoals} renderItem={itemData => (
        <View style={styles.listItem}>
          <Text >{itemData.item.value}</Text>
        </View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  screen: {
    padding: 50
  },
  input: {
    borderColor: 'black', 
    width: '80%', 
    borderWidth: 1, 
    padding: 10 
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',  
    alignItems: 'center'
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
