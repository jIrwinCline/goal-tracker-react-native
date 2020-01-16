import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import GoalItem from './components/GoalItem.js'
import GoalInput from './components/GoalInput.js'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
    { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId )
    })
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}/>
      <FlatList 
        keyExtractor={(item,index) => item.id} 
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
      }/>
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    padding: 50
  },
});
