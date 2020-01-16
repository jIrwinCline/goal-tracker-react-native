import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }


  return (
      <Modal visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Course Goals' 
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
      </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});