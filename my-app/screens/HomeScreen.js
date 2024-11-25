import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cloudImage from '../assets/cloud.png';
import cloudImage2 from '../assets/cloud2.png';
import logo from '../assets/navbar_logo.png';

const { width, height } = Dimensions.get('window');

const HomePage = () => {
  const clickSoundRef = useRef(null);
  const navigation = useNavigation();
  const [clouds, setClouds] = useState([]);
  const [smallClouds, setSmallClouds] = useState([]);

  const cloudSize = width > 400 ? 350 : 200;
  const smallCloudSize = width > 400 ? 200 : 120;

  const handleButtonClick = async (path) => {
 
      setTimeout(() => navigation.navigate(path), 500);
    
  };
  

  // const createClouds = () => {
  //   const newClouds = [];
  //   for (let i = 0; i < 3; i++) {
  //     newClouds.push({
  //       key: i,
  //       source: i % 2 === 0 ? cloudImage : cloudImage2,
  //       top: Math.random() * (height - cloudSize * 0.6),
  //       left: Math.random() * (width - cloudSize * 0.8),
  //       animationDuration: Math.random() * 10000 + 5000,
  //       animatedValue: new Animated.Value(0)
  //     });
  //   }
  //   setClouds(newClouds);
  // };

  // const createSmallClouds = () => {
  //   const newSmallClouds = [];
  //   for (let i = 0; i < 5; i++) {
  //     newSmallClouds.push({
  //       key: i,
  //       source: i % 2 === 0 ? cloudImage : cloudImage2,
  //       top: Math.random() * (height - smallCloudSize * 0.6),
  //       left: Math.random() * (width - smallCloudSize * 0.8),
  //       animationDuration: Math.random() * 10000 + 5000,
  //       animatedValue: new Animated.Value(0)
  //     });
  //   }
  //   setSmallClouds(newSmallClouds);
  // };

  // const startCloudAnimation = (cloud) => {
  //   Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(cloud.animatedValue, {
  //         toValue: width,
  //         duration: cloud.animationDuration,
  //         useNativeDriver: false
  //       }),
  //       Animated.timing(cloud.animatedValue, {
  //         toValue: -cloudSize,
  //         duration: 0,
  //         useNativeDriver: false
  //       })
  //     ])
  //   ).start();
  // };

  // useEffect(() => {
  //   createClouds();
  //   createSmallClouds();
  // }, []);

  // useEffect(() => {
  //   clouds.forEach(startCloudAnimation);
  //   smallClouds.forEach(startCloudAnimation);
  // }, [clouds, smallClouds]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonClick("Team")}
      >
        <Text style={styles.buttonText}>View Team</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 15 }]}
        onPress={() => handleButtonClick("Login")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonClick("Avatar")}
      >
        <Text style={styles.buttonText}>Profile Picture</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonClick("About")}
      >
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>


      <View style={styles.cloudContainer}>
        {clouds.map((cloud) => (
          <Animated.Image
            key={cloud.key}
            source={cloud.source}
            style={[
              styles.cloud,
              {
                top: cloud.top,
                left: cloud.animatedValue,
                width: cloudSize,
                height: cloudSize * 0.6,
                opacity: 1
              },
            ]}
          />
        ))}
        {smallClouds.map((cloud) => (
          <Animated.Image
            key={cloud.key}
            source={cloud.source}
            style={[
              styles.smallCloud,
              {
                top: cloud.top,
                left: cloud.animatedValue,
                width: smallCloudSize,
                height: smallCloudSize * 0.6,
                opacity: 1
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1edfc'
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f29fb5',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#965063',
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 }
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  cloudContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloud: {
    position: 'absolute',
    opacity:0.3
  },
  smallCloud: {
    position: 'absolute'
  }
});
