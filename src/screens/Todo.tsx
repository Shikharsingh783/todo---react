import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Card from '../component/Card';

const todoData = [
    { id: '1', title: 'Buy groceries', description: 'Milk, Bread, Eggs', day: 'Monday' },
    { id: '2', title: 'Workout', description: 'Gym at 7am', day: 'Tuesday' },
    { id: '3', title: 'Meeting', description: 'Zoom call with client', day: 'Wednesday' },
  ];

const TodoScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style = {styles.text}>To-Do</Text>
      <View style={styles.container}>
      <FlatList
        data={todoData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            day={item.day}
          />
        )}
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text : {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingHorizontal: 20,
        color: 'black',
        position: 'absolute',
        top: 50,
        left: 150
    }
    , container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: '#f2f2f2',
      },
      mainContainer: {
        flex:1,
        backgroundColor: '#f2f2f2',
      },
})

export default TodoScreen