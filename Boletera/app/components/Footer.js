import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';

function Footer({ navigation }) {
  return (
    <View style={styles.container}>
      <AppButton 
        text="Ir a Dashboard" 
        color="primary" 
        onPress={() => navigation.navigate('Dashboard')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f8f8', 
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default Footer;
