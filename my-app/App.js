import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import Profile from './screens/Profile'
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import TeamSelection from './screens/TeamSelection';
import ProfileScreen from './screens/ProfileScreen';
import WelcomePage from './screens/WelcomePage';
import DetailsPage from './screens/DetailsPage';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Quicksand: require('./fonts/Quicksand/Quicksand-VariableFont_wght.ttf'), // Path to your font
        Poppinsbold: require('./fonts/Poppins/Poppins-Bold.ttf'),
        Lilita: require('./fonts/Lilita_One/LilitaOne-Regular.ttf'),
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
        <Stack.Screen name="Home" component={WelcomePage} />
        <Stack.Screen name="Aboutus" component={AboutScreen} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
        <Stack.Screen name="Team" component={TeamSelection} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Avatar" component={ProfileScreen} />
     
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