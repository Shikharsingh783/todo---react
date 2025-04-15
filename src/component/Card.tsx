import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  day: string;
  color?: string;
}

const Card = ({title, description, day, color}: CardProps) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.card, {backgroundColor: color || '#fff'}]}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.day}>🗓️ Due: {day}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 2.5,
    borderColor: 'black',
    // borderStyle: 'dashed',
    backgroundColor: 'transparent',
    padding: 3,
  },
  card: {
    padding: 16,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    textTransform: 'capitalize',
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 8,
  },
  content: {
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  day: {
    color: '#666',
    fontStyle: 'italic',
    fontSize: 14,
  },
});

export default Card;
