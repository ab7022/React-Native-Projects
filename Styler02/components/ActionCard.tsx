import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  export default function ActionCard() {
    function openWebsite(websiteLink: string) {
      Linking.openURL(websiteLink);
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Featured Blog</Text>
        <View style={[styles.card, styles.elevatedCard]}>
          {/* Header */}
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              What's new in JavaScript 21 - ES21
            </Text>
          </View>
          
          {/* Image */}
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            }}
            style={styles.cardImage}
            accessible
            accessibilityLabel="JavaScript Logo"
          />
          
          {/* Body */}
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.bodyText}>
              ES21 introduces many new features and improvements in JavaScript. It's an essential update for all web developers. Discover the new syntax, capabilities, and why it's a must-learn in the modern development landscape.
            </Text>
          </View>
          
          {/* Footer */}
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => openWebsite('https://www.javascript.com/')}
              accessible
              accessibilityLabel="Tap to read more about JavaScript"
            >
              <Text style={styles.buttonText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    headingText: {
      fontSize: 26,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      marginBottom: 12,
      color: 'white',
    },
    card: {
      backgroundColor: '#F0F4F9',
      margin: 8,
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#D0D6E0',
    },
    elevatedCard: {
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
    },
    headingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    headerText: {
      fontSize: 22,
      color: '#2C3E50',
      fontWeight: '600',
    },
    cardImage: {
      height: 180,
      width: '100%',
      borderRadius: 10,
      marginVertical: 12,
    },
    bodyContainer: {
      marginVertical: 10,
    },
    bodyText: {
      fontSize: 16,
      color: '#4D5656',
      lineHeight: 22,
    },
    footerContainer: {
      marginTop: 16,
    },
    button: {
      backgroundColor: '#1ABC9C',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  