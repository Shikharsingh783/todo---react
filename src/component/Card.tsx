import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface CardProps {
    title: string;
    description: string;
    day: string;
}

const Card = ({ title, description, day }: CardProps) => {
  return (
    <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.day}>Due: {day}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderColor : 'black',
        borderWidth : 1.5,
      backgroundColor: '#fff',
      padding: 16,
      marginVertical: 10,
      marginHorizontal: 20,
    //   borderRadius: 10,
      elevation: 5, // Android shadow
    //   shadowColor: '#000', // iOS shadow
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowOpacity: 0.2,
    //   shadowRadius: 4,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
    },
    description: {
      fontSize: 16,
      marginTop: 4,
    },
    day: {
      marginTop: 8,
      color: 'gray',
      fontStyle: 'italic',
    },
  });
  

export default Card