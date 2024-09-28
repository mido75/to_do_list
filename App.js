import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  const [modalIsVisible , setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  
  function StartAddGoalHandler() {
    setModalIsVisible(true); 
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>
      [...currentCourseGoals,
        {
          text: enteredGoalText, id: Math.random().toString(),  
        }]);
    endAddGoalHandler();
  }
  function deleteGoalHeadler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id );
    });
  }

  return (
    <>
      <StatusBar style="light" /> 
      <View style={styles.appcontainer}>
        <Button
          title='Add New Goal'
          color='#5e0acc'
          onPress={StartAddGoalHandler}
        />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem
                text={itemData.item.text}
                id = {itemData.item.id}
                onDeleteItem={deleteGoalHeadler}
              />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </> 
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },

});
