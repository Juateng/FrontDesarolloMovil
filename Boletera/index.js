import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from './App';
import { registerRootComponent } from 'expo';

registerRootComponent(() => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <App />
  </GestureHandlerRootView>
));
