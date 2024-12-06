import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Dashboard from './app/screens/Dashboard';
import Eventos from './app/screens/Eventos';
import CreateEvent from './app/screens/createevent';
import EditEvent from './app/screens/editEvent';

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
        {/* Pantalla de Crear Evento */}
        <Stack.Screen 
          name="Crear Evento" 
          component={CreateEvent} 
          options={{ title: 'Nuevo Evento' }} 
        />
        {/* Pantalla de Editar Evento */}
        <Stack.Screen 
          name="EditEvent" 
          component={EditEvent} 
          options={{ title: 'Editar Evento' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
