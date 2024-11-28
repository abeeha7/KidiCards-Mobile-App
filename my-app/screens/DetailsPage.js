import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const DetailsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const slides = [
    {
      title: 'Learn',
      description: 'Learn Urdu and English with Fun Flashcards!',
      backgroundColor: '#FFEDD6',
      image: require('../assets/learn.png'), // Make sure the path is correct
    },
    {
      title: 'Play',
      description: 'Engage with interactive games to improve vocabulary!',
      backgroundColor: '#D6F5FF',
      image: require('../assets/play.png'), // Make sure the path is correct
    },
    {
      title: 'Quiz',
      description: 'Test your knowledge with exciting quizzes!',
      backgroundColor: '#FFFF',
      image: require('../assets/test.png'), // Make sure the path is correct
      showAboutUs: true, // Add a flag to identify the last slide
    },
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View key={index} style={[styles.slide, { backgroundColor: slide.backgroundColor }]}>
            <Text style={styles.title}>{slide.title}</Text>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.description}>{slide.description}</Text>
            {slide.showAboutUs && (
              <TouchableOpacity
                style={styles.aboutUsButton}
                onPress={() => navigation.navigate('Aboutus')}
              >
                <Text style={styles.aboutUsButtonText}>About Us</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 80,
    fontFamily: 'Lilita',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center', // Centers the title
  },
  description: {
    fontFamily: 'Quicksand',
    fontWeight: 600,
    fontSize: 20,
    textAlign: 'center',
    color: '#666',
  },
  aboutUsButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF6347',
    borderRadius: 5,
  },
  aboutUsButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#DDD', // Default color for inactive dots
  },
  activeDot: {
    backgroundColor: '#FF6347', // Active dot color
  },
  inactiveDot: {
    backgroundColor: '#DDD', // Inactive dot color
  },
});

export default DetailsPage;
