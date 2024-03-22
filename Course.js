import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Course({ course }) {
  const [rates, setRates] = useState(0);

  function increaseRates() {
    if (rates <= 6) {
      setRates(prevRates => prevRates + 1);
    }
  }

  return (
    <View style={styles.courseContainer}>
      <Image source={course.image} style={styles.profilePicture} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
        {rates <= 6 && (
          <TouchableOpacity style={styles.button} onPress={increaseRates}>
            <MaterialIcons name="star-rate" size={20} color="black" />
            <Text>{rates}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  courseContainer: {
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 16,
    flexDirection: 'row',
    padding: 15,
  },
  profilePicture: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  courseDescription: {
    marginBottom: 8,
    fontSize: 18,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
