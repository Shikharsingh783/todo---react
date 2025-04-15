import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useMemo, useEffect} from 'react';
import Card from '../component/Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddTaskModal from '../screens/pop_up';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TaskModel} from '../models/task';

const todoData = [
  {
    id: '1',
    title: 'Buy groceries',
    description: 'Milk, Bread, Eggs',
    day: 'Monday',
  },
  {id: '2', title: 'Workout', description: 'Gym at 7am', day: 'Tuesday'},
  {
    id: '3',
    title: 'Meeting',
    description: 'Zoom call with client',
    day: 'Wednesday',
  },
];

const colors = [
  'lightblue',
  'lightpink',
  'lightgreen',
  'lightyellow',
  'lightpurple',
  'lightcoral',
  'lavender',
  'palevioletred',
  'skyblue',
  'thistle',
  // Add more colors as needed
];

const TodoScreen = () => {
  const navigation = useNavigation();

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        const parsedTasks: TaskModel[] = JSON.parse(savedTasks);
        setTasks(parsedTasks);
        console.log('Loaded tasks:', parsedTasks);
      }
    } catch (error) {
      console.error('Failed to load tasks:', error);
    }
  };

  const [popUp, setPopUp] = useState(false);
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [taskAdded, setTaskAdded] = useState(false);

  useEffect(() => {
    loadTasks();
  }, [taskAdded]);

  const coloredTodoData = useMemo(() => {
    return tasks.map(item => ({
      ...item,
      color: getRandomColor(),
    }));
  }, [tasks]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.row}>
        <View style={styles.profile} />
        <View style={styles.column}>
          <Text style={styles.lightText}>Welcome Mark!</Text>
          <Text style={styles.text}> Explore Task</Text>
        </View>
      </View>

      <View style={styles.container}>
        <FlatList
          data={coloredTodoData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card
              color={item.color}
              title={item.title}
              description={item.description}
              day={item.createdAt}
            />
          )}
        />
      </View>

      <TouchableOpacity onPress={() => setPopUp(true)}>
        {/* Directly use navigation */}
        <View style={styles.floatingButton}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'normal',
              fontSize: 40,
              marginTop: -3,
            }}>
            +
          </Text>
        </View>
      </TouchableOpacity>
      <AddTaskModal
        visible={popUp}
        onClose={() => setPopUp(false)}
        onTaskAdded={() => setTaskAdded(prev => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    justifyContent: 'center',
    alignItems: 'center', // Center the icon horizontally
    position: 'absolute',
    bottom: 110,
    right: 30,
    backgroundColor: '#FCE883',
    width: 60,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
  },

  row: {
    flexDirection: 'row',
    top: 70,
    left: 20,
  },
  column: {
    flexDirection: 'column', // Stack children vertically (default behavior)
    justifyContent: 'flex-start', // Align items at the start (top)
    alignItems: 'flex-start', // Align items to the start (left) horizontally
    // backgroundColor: 'red',
    paddingLeft: 20,
  },
  lightText: {
    fontSize: 22,
    fontWeight: 'normal',
    // textAlign: 'left',
    color: 'black',
    // alignSelf: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    // textAlign: 'left',
    color: 'black',
    // alignSelf: 'center',
    // left: 20,
  },
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginBottom: 100,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50, // Half of width/height
    backgroundColor: 'orange',
  },
});

export default TodoScreen;
