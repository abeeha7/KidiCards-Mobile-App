import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';

export default function WelcomePage({ navigation }) {
  const scaleValueLearnMore = useRef(new Animated.Value(1)).current;
  const scaleValueTeam = useRef(new Animated.Value(1)).current;
  const scaleAvatar = useRef(new Animated.Value(1)).current;


  const handleLearnMore = () => {
    // Start the scale animation for Learn More button
    Animated.sequence([
      Animated.timing(scaleValueLearnMore, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValueLearnMore, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate('DetailsPage'); // Navigate after animation
    });
  };

  const handleTeam = () => {
    // Start the scale animation for Meet the Team button
    Animated.sequence([
      Animated.timing(scaleValueTeam, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValueTeam, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate('Team'); // Navigate after animation
    });
  };
  const handleAvatar = () => {
    // Start the scale animation for Meet the Team button
    Animated.sequence([
      Animated.timing(scaleAvatar, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAvatar, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate('Avatar'); // Navigate after animation
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.imagelogo} />
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Image source={require('../assets/main.png')} style={styles.image} />

      {/* Animated Button for Learn More */}
      <Animated.View style={{ transform: [{ scale: scaleValueLearnMore }] }}>
        <TouchableOpacity style={styles.button} onPress={handleLearnMore}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Animated Button for Meet the Team */}
      <Animated.View style={{ transform: [{ scale: scaleValueTeam }] }}>
        <TouchableOpacity style={styles.button2} onPress={handleTeam}>
          <Text style={styles.buttonText}>Meet the Team</Text>
        </TouchableOpacity>
      </Animated.View>

       {/* Animated Button for Avatar Team */}
      <Animated.View style={{ transform: [{ scale: scaleAvatar }] }}>
        <TouchableOpacity style={styles.button3} onPress={handleAvatar}>
          <Text style={styles.buttonText}>Select Avatar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6f6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF90A2',
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#e07d8c',
    fontFamily: 'Lilita',
    marginTop: 50,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  imagelogo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    top: -35,
    right: 10,
  },
  button: {
    backgroundColor: '#e28694',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 35,
    shadowColor: '#924a55',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  button2: {
    backgroundColor: '#61a0d2',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 24,
    shadowColor: '#d1edfc',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 10,
  },
  button3: {
    backgroundColor: '#C8A2C8',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 24,
    shadowColor: '#d1edfc',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Quicksand',
    textShadowColor: '#864747',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});
