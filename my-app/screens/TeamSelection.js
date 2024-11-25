import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
const TeamSelection = ({ navigation }) => {
  const [selectedMember, setSelectedMember] = useState('');

  const handleSelect = (memberName) => {
    console.log('Navigating to Profile with: ', memberName);
    setSelectedMember(memberName); // Update selected member
    navigation.navigate('Profile', { memberName }); // Navigate to Profile screen
  };

  return (
    <ImageBackground
      source={require('../assets/heartbg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Choose a Team Member!</Text>
        <View style={styles.membersContainer}>
          <TouchableOpacity
            style={styles.memberCard}
            onPress={() => handleSelect('Abeeha')}
          >
            <Image
              source={require('../assets/Abeeha.png')}
              style={[
                styles.memberImage,
                selectedMember === 'Abeeha' && styles.selectedImage,
              ]}
            />
            <Text style={styles.memberName}>Abeeha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.memberCard}
            onPress={() => handleSelect('Areesha')}
          >
            <Image
              source={require('../assets/Areesha.png')}
              style={[
                styles.memberImage,
                selectedMember === 'Areesha' && styles.selectedImage,
              ]}
            />
            <Text style={styles.memberName}>Areesha</Text>
          </TouchableOpacity>
        </View>

        {selectedMember && <Text style={styles.selectedText}>You selected: {selectedMember}</Text>}
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1, // Makes the ImageBackground cover the entire screen
    width: '100%', // Ensures full width
    height: '100%', // Ensures full height
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(202, 39, 93, 0.4)', // Dark pink with 20% opacity
    padding: 20,
   
  },
  heading: {
    marginTop: 20,
    fontFamily: 'Quicksand',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffff', // Darker pink color
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Black shadow with 50% opacity
    textShadowOffset: { width: 2, height: 2 }, // Offset for the shadow
    textShadowRadius: 4, // Blur radius for the shadow
  },
  membersContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberCard: {
    margin: 10,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberImage: {
    width: 200,
    height: 220, // Adjust according to the image size
    borderRadius: 5,
  },
  selectedImage: {
    transform: [{ scale: 1.1 }], // Scale up the image on selection
  },
  memberName: {
    fontFamily: 'Quicksand',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffff', // Text color below the image
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Black shadow with 50% opacity
    textShadowOffset: { width: 2, height: 2 }, // Offset for the shadow
    textShadowRadius: 4, // Blur radius for the shadow
  },
  selectedText: {
    fontSize: 18,
    marginTop: 20,
    color: '#7b4f83',
  },
});

export default TeamSelection;
