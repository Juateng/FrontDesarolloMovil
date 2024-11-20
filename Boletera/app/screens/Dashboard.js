import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AppText from '../components/AppText';

function Dashboard({ navigation }) {  
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/3185113.jpg')}
    >
      <View style={styles.buttonContainer}> 
      <AppText texto={"Bienvenido, ¿Qué desea hacer?"} color="white" />
        <AppButton text={'Usuarios'} color='primary' onPress={() => console.log('Usuarios')} />
        <AppButton 
          text={'Eventos'} 
          color='white' 
          onPress={() => navigation.navigate('Eventos')} 
        />
        <AppButton text={'Mis tickets'} color='primary' onPress={() => console.log('Tickets')} />
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
    margin: 20,
  },
});

export default Dashboard;
