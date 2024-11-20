// AppText.js
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function AppText({ texto, style }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Fondo blanco
    padding: 10,
    borderRadius: 8, // Bordes redondeados opcionales
    marginVertical: 10,
    textAlign: 'center',
  },
  text: {
    color: '#000', // Texto negro
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppText;
