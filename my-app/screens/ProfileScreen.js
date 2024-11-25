import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import expo-image-picker
import profile1 from '../assets/girl.png';
import profile2 from '../assets/girl1.png';
import profile3 from '../assets/boy.png';
import profile4 from '../assets/boy2.png';

const initialAvatars = [
  { id: 1, src: profile1 },
  { id: 2, src: profile2 },
  { id: 3, src: profile3 },
  { id: 4, src: profile4 },
];

export default function ProfileScreen({ navigation }) {
  const [avatars, setAvatars] = useState(initialAvatars); 
  const [selectedAvatar, setSelectedAvatar] = useState(null); 

  const handleAvatarSelect = (id) => {
    console.log(`Avatar ${id} selected`);
    const avatar = avatars.find((avatar) => avatar.id === id);
    setSelectedAvatar(avatar.src);
  };

  const handleTakePicture = async () => {
    // Request permission to access camera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Camera Result:", result); 

    if (!result.cancelled && result.assets && result.assets[0].uri) {
      // Force image to be preloaded
      Image.prefetch(result.assets[0].uri);

      // Adding the newly taken image to the avatars array
      const newAvatar = { id: avatars.length + 1, src: { uri: result.assets[0].uri } };
      setAvatars((prevAvatars) => [...prevAvatars, newAvatar]); 
      setSelectedAvatar(result.assets[0].uri); 
    }
  };

  const handlePickImage = async () => {
    // Request permission to access the gallery
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Gallery Result:", result); 

    if (!result.cancelled && result.assets && result.assets[0].uri) {
      // Adding the newly selected image to the avatars array
      const newAvatar = { id: avatars.length + 1, src: { uri: result.assets[0].uri } };
      setAvatars((prevAvatars) => [...prevAvatars, newAvatar]); 
      setSelectedAvatar(result.assets[0].uri); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.avatarSelect}>Select Your Avatar!</Text>
      <View style={styles.avatarContainer}>
        {avatars.map((avatar) => (
          <TouchableOpacity
            key={avatar.id}
            onPress={() => handleAvatarSelect(avatar.id)}
          >
            <Image source={avatar.src} style={styles.avatarImage} resizeMode="cover" />

          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button} onPress={handleTakePicture}>
          <Text style={styles.buttonText}>Take a Picture</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={handlePickImage}>
          <Text style={styles.buttonText}>Select an Image</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 80, 
    paddingBottom: 20,
  },
  avatarSelect: {
    fontSize: 28,
    color: '#F56565', 
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',  
    width: '80%',  
    marginBottom: 20,  
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35, 
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  buttonContainer: {
    marginTop: 15,  
  },
  button: {
    backgroundColor: '#F56565', 
    borderRadius: 25, 
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems:'center'
  },
});
