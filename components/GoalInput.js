import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('')
  }

  const cancelAddGoalHandler = () => {
      props.onCancel()
      setEnteredGoal('')
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
            <View style={styles.ButtonLayout}>
                <View style={styles.button}>
                    <Button title='CANCEL' color='red' onPress={cancelAddGoalHandler} />
                </View>
                <View style={styles.button}>
                    <Button title='ADD' onPress={addGoalHandler} />
                </View>
            </View>
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
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center'
  },
  ButtonLayout: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
  },
  button: {
      width: '40%',
  }
});