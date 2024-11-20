import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Dashboard from './app/screens/Dashboard';
import Eventos from './app/screens/Eventos';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* Pantalla de bienvenida */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Bienvenido' }}
        />
        {/* Pantalla de Dashboard */}
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ title: 'Inicio' }}
        />
        {/* Pantalla de Eventos */}
        <Stack.Screen 
          name="Eventos" 
          component={Eventos} 
          options={{ title: 'Eventos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
