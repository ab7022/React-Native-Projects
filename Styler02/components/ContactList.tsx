import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: '1',
      name: 'John Doe',
      number: '9876543210',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      status2: 'Making G Pay smooth',
      status: 'online',
    },
    {
      uid: '2',
      name: 'Jane Doe',
      number: '1234567890',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      status: 'offline',
      status2: 'Learning Nextjs'

    },
    {
      uid: '3',
      name: 'James Smith',
      number: '1234567890',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      status: 'busy',
      status2: 'Creating mobile apps'
    },
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, number, image, status,status2 }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: image }} style={styles.userImage} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userMessage}>{status2}</Text>

              {/* <Text style={styles.userNumber}>{number}</Text>
              <Text style={[styles.userStatus, statusStyles(status)]}>
                {status}
              </Text> */}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Function to dynamically apply styles based on status
const statusStyles = (status:string) => {
  switch (status) {
    case 'online':
      return { color: 'green' };
    case 'offline':
      return { color: 'gray' };
    case 'busy':
      return { color: 'red' };
    default:
      return {};
  }
};

export default ContactList;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  container: {
    // backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 3,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 10,
    marginBottom: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
   
  },
  userNumber: {
    fontSize: 14,
    color: '#555',
  },
  userStatus: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 5,
  },
  userMessage:{
    marginVertical:0,
    color:'white'
  }
});
