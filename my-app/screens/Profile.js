import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, ScrollView } from 'react-native';

const Profile = ({ route }) => {
  const { memberName } = route.params; // Get the member name passed via route.params
  const [detailsVisible, setDetailsVisible] = useState(false); // State to toggle visibility of details
  const [slideAnim] = useState(new Animated.Value(500)); // Initial offset for sliding animation

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);

    // Trigger sliding animation
    Animated.timing(slideAnim, {
      toValue: detailsVisible ? 500 : 0, // Slide up or down
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Member-specific details
  const getMemberDetails = (memberName) => {
    if (memberName === 'Abeeha') {
      return {
        profilePic: require('../assets/Abeeha.png'),
        description: 'Software Engineer | AI Researcher | Passionate about solving complex problems.',
        background: 'B.Sc. in Computer Science, XYZ University\nM.Sc. in AI, ABC University',
        contributions: ['Developed machine learning models for real-time applications', 'Contributed to open-source AI projects', 'Research on AI ethics and fairness'],
      };
    } else if (memberName === 'Areesha') {
      return {
        profilePic: require('../assets/Areesha.png'),
        description: 'Data Scientist | ML Enthusiast | Loves data-driven decision making.',
        background: 'B.Sc. in Data Science, ABC University\nM.Sc. in Data Analytics, XYZ University',
        contributions: ['Worked on big data analytics projects', 'Published research in data visualization', 'Developed predictive models for business analytics'],
      };
    }
    return {}; // Default return if no matching name
  };

  const memberDetails = getMemberDetails(memberName);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profile}>
        <Image style={styles.profilePhoto} source={memberDetails.profilePic} />
        <Text style={styles.profileName}>{memberName}</Text>
        <Text style={styles.profileDesc}>{memberDetails.description}</Text>
      </View>

      {/* Sliding Details Section */}
      <Animated.View style={[styles.details, { transform: [{ translateY: slideAnim }] }]}>
        <Text style={styles.detailsTitle}>Academic Background</Text>
        <Text style={styles.detailsText}>{memberDetails.background}</Text>

        <Text style={styles.detailsTitle}>Key Contributions</Text>
        {memberDetails.contributions.map((contribution, index) => (
          <Text key={index} style={styles.detailsText}>{`• ${contribution}`}</Text>
        ))}
      </Animated.View>

      {/* Toggle Button */}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleDetails}>
        <Text style={styles.toggleButtonText}>
          {detailsVisible ? 'Hide Details' : 'Show Details'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileDesc: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  details: {
    backgroundColor: '#f8d9e0',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    elevation: 5,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  toggleButton: {
    backgroundColor: '#7b4f83',
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
