import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import Profile from './screens/Profile'
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import TeamSelection from './screens/TeamSelection';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Quicksand: require('./fonts/Quicksand/Quicksand-VariableFont_wght.ttf'), // Path to your font
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#7b4f83" />
        <Text style={styles.loaderText}>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#f8d9e0' },
          headerTitleStyle: { fontFamily: 'Quicksand' }, // Apply font to headers
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Team" component={TeamSelection} />
        <Stack.Screen name="Profile" component={Profile} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8d9e0',
  },
  loaderText: {
    fontSize: 16,
    fontFamily: 'Quicksand',
    color: '#7b4f83',
    marginTop: 10,
  },
});
