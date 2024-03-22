import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Course from './Course'; 

export default function App() {
  const courses = [
    { id: 1, title: 'Computer Science', description: 'use technology to solve problems and prepare for the future.', image: require('./sci.png') },
    { id: 2, title: 'Mobile Device Programming', description: 'A mobile app developer uses programming languages and development skills to create, test, and develop applications on mobile devices.', image: require('./mob.png') },
    { id: 3, title: 'Cyber Security', description: 'the practice of protecting systems, networks, and programs from digital attacks.', image: require('./cy.png') },
    { id: 4, title: 'Network Security', description: ' a set of rules and configurations designed to protect the integrity, confidentiality and accessibility of computer networks and data using both software and hardware technologies.', image: require('./net.png') },
    { id: 5, title: 'Telecommunications', description: 'various sectors, but all include a transmitter and a receiver. The medium of signal transference can be via various means—fiber, electromagnetic fields, light, cable, etc.', image: require('./telc.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LIMKOKWING UNIVERSITY OF CREATIVE TECHNOLOGY</Text>
      </View>

      <ScrollView>
        {courses.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'blue',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 50,
    marginBottom: 40,
    marginTop: 20
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

