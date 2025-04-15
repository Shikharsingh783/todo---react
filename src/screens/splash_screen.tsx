import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SplashScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do a great work</Text>
      <Text style={styles.title}>
        Manage and {'\n'}
        Prioritize your{'\n'}
        task easily.
      </Text>

      <Image
        source={require('../../assets/todo-icon.png')}
        style={styles.image}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainTabs')}
          style={styles.buttonContainer2}>
          {/* Icon in the button */}
          <Icon name="arrow-right" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingHorizontal: 20,
    color: 'grey',
    position: 'absolute',
    bottom: 340,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginBottom: 20,
    lineHeight: 50,
    position: 'absolute',
    bottom: 140,
    left: 0,
  },
  buttonContainer2: {
    justifyContent: 'center',
    alignItems: 'center', // Center the icon horizontally
    position: 'absolute',
    bottom: 20,
    right: 10,
    height: 60, // Slightly increased height for a better button
    width: 90, // Make the button square
    backgroundColor: 'black',
    borderRadius: 0, // Rounded button
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center', // Center the icon horizontally
    position: 'absolute',
    bottom: 20,
    right: 30,
    backgroundColor: 'black',
    borderRadius: 30, // Rounded button
  },
  image: {
    marginTop: 50,
    width: 360,
    height: 400,
  },
});

export default SplashScreen;
