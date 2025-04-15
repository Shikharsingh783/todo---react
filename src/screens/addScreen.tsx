import {View, Text, StyleSheet, Image, Touchable} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';

const AddScreen = () => {
  const navigation = useNavigation(); // Use the navigation hook to get access to navigation

  const handleBack = () => {
    navigation.goBack(); // This will take the user to the previous screen
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
          <View style={styles.touchableArea}>
            <Image
              source={require('../../assets/back2.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Add to the list</Text>
      </View>
      <TextInput placeholder="Task" style={styles.heading} multiline={true} />
      <View style={styles.addTask}>
        <Text style={{color: 'white', fontWeight: 'normal', fontSize: 16}}>
          Add Task
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 60,
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
    paddingLeft: 40,
  },
  image: {
    width: 20,
    height: 20,
  },
  touchableArea: {
    left: 10,
    // backgroundColor: 'red',
    height: 30,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 2,
  },
  heading: {
    marginHorizontal: 20,
    marginTop: 20,
    height: 150, // Make it tall (adjust as needed)
    borderWidth: 1, // Add a visible border
    borderColor: 'black', // Light gray border
    borderRadius: 0, // No rounded corners
    padding: 30, // Space inside the box
    fontSize: 16,
    textAlignVertical: 'top', // Start typing from top
    backgroundColor: '#80DAEB',
  },
  addTask: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 130,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddScreen;
