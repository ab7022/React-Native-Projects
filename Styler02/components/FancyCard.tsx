import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      
      {/* Card 1 */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg'}}
          style={styles.cardImage}
          accessibilityLabel="Image of Taj Mahal"
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra, India</Text>
          <Text style={styles.cardDescription}>
            One of the seven wonders of the world, the Taj Mahal is a stunning
            piece of Mughal architecture.
          </Text>
          <Text style={styles.cardFooter}>12 minutes away</Text>
        </View>
      </View>
      
      {/* Card 2 */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={styles.cardImage}
          accessibilityLabel="Image of Amber Fort"
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Amber Fort</Text>
          <Text style={styles.cardLabel}>Jaipur, India</Text>
          <Text style={styles.cardDescription}>
            A beautiful blend of Hindu and Mughal architecture, Amber Fort is 
            located in the Pink City.
          </Text>
          <Text style={styles.cardFooter}>20 minutes away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 12,
    color: '#333',
    paddingHorizontal: 9,
  },
  card: {
    height: 360,
    width: '100%',
    borderRadius: 8,
    marginVertical: 12,
    backgroundColor: '#FFF',
  },
  cardElevated: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardImage: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E2022',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 14,
    color: '#838383',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 14,
    color: '#888',
    fontWeight: '600',
  },
});
