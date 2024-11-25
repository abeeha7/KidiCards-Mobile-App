import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import jellyfish from '../assets/icon copy.png';  // Jellyfish image
import blueWhale from '../assets/CategoryIcons/Animals.png'; // Blue whale image
import fruitsIcon from '../assets/CategoryIcons/fruits.png'; // Fruits icon
import veggiesIcon from '../assets/CategoryIcons/veggies.png'; // Veggies icon
import background from '../assets/fbg.png'

const AboutUs = () => {
  const openProjectLink = () => {
    Linking.openURL('https://kidi-cards-web-dev-project-rlxm.vercel.app/')
      .catch(err => console.error('Failed to open URL', err));
  };

  return (
    <ImageBackground source={background} style={styles.backgroundImage} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.aboutHeader}>
          <Image source={jellyfish} style={styles.headerImage} />
          <Text style={styles.headerTitle}>ABOUT US</Text>
          <Text style={styles.headerDescription}>Your magical companion for interactive learning!</Text>
        </View>

        {/* About Mission Section */}
        <View style={styles.aboutSection}>
          <Image source={blueWhale} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>OUR MISSION</Text>
          <Text style={styles.sectionDescription}>
            We aim to make learning both English and Urdu interactive, fun, and accessible. Education is no longer confined to classrooms,
            and our goal is to build a platform for children to learn through play.
          </Text>
        </View>

        {/* Key Features Section */}
        <View style={styles.aboutSection}>
          <Image source={veggiesIcon} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>KEY FEATURES</Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>Bilingual Learning: Supports both English and Urdu for a comprehensive experience.</Text>
            <Text style={styles.featureItem}>Interactive Flashcards: Visually engaging flashcards with sound for enhanced learning.</Text>
            <Text style={styles.featureItem}>Gamified Learning: Points, leaderboards, and matching games to boost engagement.</Text>
            <Text style={styles.featureItem}>Knowledge Testing: MCQs with instant feedback and visual effects.</Text>
            <Text style={styles.featureItem}>Progress Tracking: Parents can monitor their child&apos;s progress and achievements.</Text>
            <Text style={styles.featureItem}>Accessible Education: Provides a quality learning tool for children with limited schooling access.</Text>
          </View>
        </View>

        {/* About Vision Section */}
        <View style={styles.aboutSection}>
          <Image source={fruitsIcon} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>OUR VISION</Text>
          <Text style={styles.sectionDescription}>
            Breaking barriers and empowering children to learn, grow, and develop essential skills through fun and interactive experiences.
          </Text>
        </View>

        {/* New Section for the Project Link */}
        <View style={styles.projectSection}>
          <Text style={styles.projectTitle}>Visit Our Project</Text>
          <Text style={styles.projectDescription}>
            Check out our interactive learning platform and explore the fun ways to learn English and Urdu!
          </Text>
          <TouchableOpacity onPress={openProjectLink} style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Visit Now</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </ImageBackground>
  );
}

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // This ensures content is visible above the image
    paddingTop: 20,
    paddingBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  aboutHeader: {
    backgroundColor: 'rgba(255, 99, 71, 0.5)', 
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff6347',
    marginTop: 20,
  },
  headerDescription: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
    textAlign: 'center',
  },
  headerImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -40,
    right: 20,
    resizeMode: 'contain',
  },
  aboutSection: {
    padding: 20,
    backgroundColor: 'rgba(226, 249, 255, 0.9)', 
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
    position: 'relative',
    paddingTop: 60,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#76bae2',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -50,
    left: 20,
    resizeMode: 'contain',
  },
  featureList: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  featureItem: {
    fontSize: 16,
    color: '#444',
    backgroundColor: '#f9d6e5',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  projectSection: {
    padding: 20,
    backgroundColor: 'rgba(255, 235, 153, 0.9)',
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 15,
    textAlign: 'center',
  },
  projectDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  linkButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
