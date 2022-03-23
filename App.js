import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {store} from './store'
import {Provider} from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MapScreen from './screens/MapScreen';
import {KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';





// Set Up Redux

const Stack = createNativeStackNavigator()

export default function App()
{
  return (
    <Provider store={store}>
      <NavigationContainer>

        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? -64 : 0}
            style={{flex: 1}}>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false
                }} />

              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false
                }} />

            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}


