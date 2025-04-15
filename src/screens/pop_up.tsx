// src/components/AddTaskModal.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import uuid from 'react-native-uuid';
import {TaskModel} from '../models/task';

interface Props {
  visible: boolean;
  onClose: () => void;
  onTaskAdded?: () => void;
}

const AddTaskModal: React.FC<Props> = ({visible, onClose, onTaskAdded}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = async () => {
    if (!title.trim()) {
      // Alert.alert('Title is required');
      return;
    }

    const newTask: TaskModel = {
      id: uuid.v4() as string,
      title,
      description,
      createdAt: new Date().toISOString(), // or any format you prefer
    };

    console.log('New Task:', newTask);

    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      const tasks = storedTasks ? JSON.parse(storedTasks) : [];
      const updatedTasks = [...tasks, newTask];

      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));

      setTitle('');
      setDescription('');
      onClose();
      onTaskAdded?.(); // refresh list
    } catch (error) {
      console.log('Error saving task:', error);
    }
  };
  return (
    <Modal
      transparent
      animationType="fade"
      //   animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.row}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
              Create a new task
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>X</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Task"
            onChangeText={setTitle}
            cursorColor={'black'}
            placeholderTextColor={'#000000'}
            style={styles.heading}
            multiline={true}
          />

          <TextInput
            placeholder="Description"
            onChangeText={setDescription}
            cursorColor={'black'}
            placeholderTextColor={'#000000'}
            style={styles.description}
            multiline={true}
          />
          <TouchableOpacity
            onPress={() => {
              handleAddTask();
              onClose();
            }}>
            <View style={styles.addButton}>
              <Text>Add Task</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddTaskModal;

const styles = StyleSheet.create({
  row: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // modalContent: {
  //   backgroundColor: 'white',
  //   width: '80%',
  //   padding: 20,
  //   borderRadius: 12,
  //   alignItems: 'center',
  // },
  closeBtn: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  modalContent: {
    borderColor: 'black',
    borderWidth: 4,
    backgroundColor: 'white',
    width: '90%', // Wider modal
    minHeight: 200, // Minimum height
    padding: 24, // Spacing inside modal
    // borderRadius: 20, // More rounded corners
    alignItems: 'stretch', // Stretch content horizontally
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  heading: {
    fontWeight: 'bold',
    marginTop: 20,
    height: 50, // Make it tall (adjust as needed)
    borderWidth: 1, // Add a visible border
    borderColor: 'black', // Light gray border
    borderRadius: 0, // No rounded corners
    padding: 15, // Space inside the box
    fontSize: 16,
    textAlignVertical: 'top', // Start typing from top
    backgroundColor: '#80DAEB',
  },
  description: {
    // fontWeight: 'bold',
    marginTop: 10,
    height: 150, // Make it tall (adjust as needed)
    borderWidth: 1, // Add a visible border
    borderColor: 'black', // Light gray border
    borderRadius: 0, // No rounded corners
    padding: 15, // Space inside the box
    fontSize: 16,
    textAlignVertical: 'top', // Start typing from top
    backgroundColor: '#C9A0DC', // Wisteria
  },
  addButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#FCE883', // Crayon Yellow (Crayola-style)
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 25,
  },
});
