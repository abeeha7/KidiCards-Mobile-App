import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking } from 'react-native';

const background = require('../assets/bgg.png'); // Ensure the image exists or use a fallback

const Profile = ({ route }) => {
  const { memberName } = route.params;
  const [showBackground, setShowBackground] = useState(false);
  const [showContributions, setShowContributions] = useState(false);

  const getMemberDetails = (memberName) => {
    if (memberName === 'Abeeha') {
      return {
        profilePic: require('../assets/Abeeha.png'),
        description: 'Computer Science Senior | Habib University',
        background: {
          text: 'GitHub Profile',
          url: 'https://github.com/abeeha7',
          coursesTaken: [
            'Data Structures and Algorithms',
            'Operating Systems',
            'Software Security',
            'Web Development',
          ],
          toolsFrameworks: ['React Js', 'Firebase', 'Node.js','React Native'],
          programmingLanguages: ['JavaScript', 'Python', 'Java', 'C++'],
          technicalSkills: ['Web Development', 'Game Development', 'Database Management'],
        },
        contributions: [
          'Added the Data in Firestore',
          'Developed Main Page,Learning Page, Matching Page, Testing Page,Score Page',
          'Native App: Added Camera, Avatar Page, About Us',
        ],
      };
    } else if (memberName === 'Areesha') {
      return {
        profilePic: require('../assets/Areesha.png'),
        description: 'Computer Science Senior | Habib University',
        background: {
          text: 'GitHub Profile',
          url: 'https://github.com/AAreesha',
          coursesTaken: [
            'Data Structures and Algorithms',
            'Operating Systems',
            'Artificial Intelligence',
            'Web Development',
          ],
          toolsFrameworks: ['React Js', 'Firebase', 'Node.js', 'React Native'],
          programmingLanguages: ['JavaScript', 'Python', 'Java', 'C++'],
          technicalSkills: ['UI/UX Design', 'API Development', 'Database Management'],
        },
        contributions: [
          'Designed the Wireframes',
          'Handled the Firebase and Admin Functions',
          'Made the Homepage, Login, Registration, About Us, Avatar, Profile Section, Admin Form',
          'Native App: Made Main Page, Profile Screens, Learn More Carousel',
        ],
      };
    }
    return {};
  };

  const memberDetails = getMemberDetails(memberName);

  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.imageBackground}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.profilePhoto} source={memberDetails.profilePic} />
          <Text style={styles.profileName}>{memberName}</Text>
          <Text style={styles.profileDesc}>{memberDetails.description}</Text>
        </View>

        {showBackground && (
  <View style={styles.details}>
    {/* Academic Background */}
    {typeof memberDetails.background === 'string' ? (
      <Text style={styles.detailsText}>{memberDetails.background}</Text>
    ) : (
      <Text
        style={[styles.detailsText, styles.link]}
        onPress={() => Linking.openURL(memberDetails.background.url)}
      >
        {memberDetails.background.text}
      </Text>
    )}

    {/* Courses Taken */}
    {memberDetails.background.coursesTaken && Array.isArray(memberDetails.background.coursesTaken) && memberDetails.background.coursesTaken.length > 0 && (
      <>
        <Text style={styles.detailsTitle}>Courses Taken</Text>
        {memberDetails.background.coursesTaken.map((course, index) => (
          <Text key={index} style={styles.detailsText}>
            • {course}
          </Text>
        ))}
      </>
    )}

    {/* Tools & Frameworks */}
    {memberDetails.background.toolsFrameworks && Array.isArray(memberDetails.background.toolsFrameworks) && memberDetails.background.toolsFrameworks.length > 0 && (
      <>
        <Text style={styles.detailsTitle}>Tools & Frameworks</Text>
        {memberDetails.background.toolsFrameworks.map((tool, index) => (
          <Text key={index} style={styles.detailsText}>
            • {tool}
          </Text>
        ))}
      </>
    )}

    {/* Programming Languages */}
    {memberDetails.background.programmingLanguages && Array.isArray(memberDetails.background.programmingLanguages) && memberDetails.background.programmingLanguages.length > 0 && (
      <>
        <Text style={styles.detailsTitle}>Programming Languages</Text>
        {memberDetails.background.programmingLanguages.map((language, index) => (
          <Text key={index} style={styles.detailsText}>
            • {language}
          </Text>
        ))}
      </>
    )}

    {/* Technical Skills */}
    {memberDetails.background.technicalSkills && Array.isArray(memberDetails.background.technicalSkills) && memberDetails.background.technicalSkills.length > 0 && (
      <>
        <Text style={styles.detailsTitle}>Technical Skills</Text>
        {memberDetails.background.technicalSkills.map((skill, index) => (
          <Text key={index} style={styles.detailsText}>
            • {skill}
          </Text>
        ))}
      </>
    )}
  </View>
)}

        {showContributions && (
          <View style={styles.details}>
            <Text style={styles.detailsTitle}>Project Contributions</Text>
            {memberDetails.contributions.map((contribution, index) => (
              <Text key={index} style={styles.detailsText}>{`• ${contribution}`}</Text>
            ))}
          </View>
        )}

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShowBackground(!showBackground)}
        >
          <Text style={styles.toggleButtonText}>
            {showBackground ? 'Hide Academic Background' : 'Academic Background'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShowContributions(!showContributions)}
        >
          <Text style={styles.toggleButtonText}>
            {showContributions ? 'Hide Project Contributions' : 'Project Contributions'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add overlay for readability
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
    fontSize: 40,
    fontFamily: 'Lilita',
    color: '#530e52',
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
    marginTop: 10,
    elevation: 5,
  },
  detailsTitle: {
    fontFamily: 'Lilita',
    color: '#530e52',
    fontSize: 20,
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontFamily: 'Quicksand',
    fontWeight: 600,
  },
  toggleButton: {
    backgroundColor: '#7b4f83',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Quicksand',
    letterSpacing: 1,
  },
  link:{
    color:'blue',
  },
});

export default Profile;
