import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageSourcePropType, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

type User = {
  id: string;
  name: string;
  designation: string;
  experience: string;
  location: string;
  image: ImageSourcePropType;
};

// Dummy data for users
const dummyUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    designation: 'Senior Software Engineer',
    experience: '5 years',
    location: 'Bangalore, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '2',
    name: 'Jane Smith',
    designation: 'UX Designer',
    experience: '3 years',
    location: 'Mumbai, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '3',
    name: 'Robert Johnson',
    designation: 'Product Manager',
    experience: '6 years',
    location: 'Delhi, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '4',
    name: 'Emily Davis',
    designation: 'DevOps Engineer',
    experience: '7 years',
    location: 'Chennai, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '5',
    name: 'Michael Brown',
    designation: 'DevOps Engineer',
    experience: '7 years',
    location: 'Chennai, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '6',
    name: 'Sarah Wilson',
    designation: 'Frontend Developer',
    experience: '4 years',
    location: 'Hyderabad, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '7',
    name: 'David Miller',
    designation: 'Backend Engineer',
    experience: '5 years',
    location: 'Pune, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '8',
    name: 'Priya Patel',
    designation: 'Mobile Developer',
    experience: '3 years',
    location: 'Ahmedabad, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '9',
    name: 'Alex Turner',
    designation: 'QA Engineer',
    experience: '4 years',
    location: 'Kolkata, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '10',
    name: 'Lisa Wong',
    designation: 'UI/UX Designer',
    experience: '6 years',
    location: 'Bengaluru, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '11',
    name: 'Rajesh Kumar',
    designation: 'Full Stack Developer',
    experience: '5 years',
    location: 'Chennai, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '12',
    name: 'Ananya Sharma',
    designation: 'Data Analyst',
    experience: '3 years',
    location: 'Mumbai, India',
    image: require('@/assets/images/placeholder-avatar.png')
  },
];

export default function ExploreScreen() {
  const [search, setSearch] = useState({
    designation: '',
    experience: '',
    location: '',
  });

  const [filteredUsers, setFilteredUsers] = useState<User[]>(dummyUsers);

  // Handle search whenever search state changes
  const performSearch = () => {
    // If all search fields are empty, show all users
    if (!search.designation && !search.experience && !search.location) {
      setFilteredUsers(dummyUsers);
      return;
    }

    const filtered = dummyUsers.filter(user => {
      const matchesDesignation = search.designation 
        ? user.designation.toLowerCase().includes(search.designation.toLowerCase())
        : true;
      
      const matchesExperience = search.experience
        ? user.experience.toLowerCase().includes(search.experience.toLowerCase())
        : true;
      
      const matchesLocation = search.location
        ? user.location.toLowerCase().includes(search.location.toLowerCase())
        : true;
      
      return matchesDesignation && matchesExperience && matchesLocation;
    });
    
    setFilteredUsers(filtered);
  };

  // Run search whenever search state changes
  useEffect(() => {
    performSearch();
  }, [search]);

  // Removed animation related code as we're using ParallaxScrollView

  const renderUserItem = ({ item }: { item: User }) => (
    <ThemedView style={styles.userCard}>
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.userInfo}>
        <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
        <ThemedText style={styles.designation}>{item.designation}</ThemedText>
        <View style={styles.details}>
          <ThemedText style={styles.detailText}>
            <Ionicons name="briefcase-outline" size={14} /> {item.experience}
          </ThemedText>
          <ThemedText style={[styles.detailText, styles.location]}>
            <Ionicons name="location-outline" size={14} /> {item.location}
          </ThemedText>
        </View>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#00695C" />
      </TouchableOpacity> 
    </ThemedView>
  );

  const theme = useTheme();
  //const headerBackgroundColor = { dark: theme.colors.background, light: '#fff' };

  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#00695C', dark: '#004D40' }}
      headerImage={
        <View style={styles.searchContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Find Professionals</ThemedText>         
          <ThemedView style={styles.inputContainer}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.input}
              placeholder="Job title, keywords"
              value={search.designation}
              onChangeText={(text) => setSearch({...search, designation: text})}
              placeholderTextColor="#999"
            />
          </ThemedView>
          
          <View style={styles.row}>
            <View style={[styles.inputContainer, styles.halfInput]}>
              <Ionicons name="briefcase-outline" size={18} color="#666" style={styles.searchIcon} />
              <TextInput
                style={[styles.input, styles.halfInputText]}
                placeholder="Experience"
                value={search.experience}
                onChangeText={(text) => setSearch({...search, experience: text})}
                placeholderTextColor="#999"
              />
            </View>
            <View style={[styles.inputContainer, styles.halfInput, {marginLeft: 8}]}>
              <Ionicons name="location-outline" size={18} color="#666" style={styles.searchIcon} />
              <TextInput
                style={[styles.input, styles.halfInputText]}
                placeholder="Location"
                value={search.location}
                onChangeText={(text) => setSearch({...search, location: text})}
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>
      }
    >
      {/* Users List */}
      <View style={styles.contentContainer}>
        <FlatList
          data={filteredUsers}
          renderItem={renderUserItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    padding: 16,
    paddingTop: 24,
    minHeight: 220,
    alignSelf: 'center',
  },
  sectionTitle: {
    marginBottom: 16,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
  },
  halfInputText: {
    paddingLeft: 8,
  },
  input: {
    flex: 1,
    height: 48,
    paddingLeft: 8,
    fontSize: 14,
    borderWidth: 0,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
  },
  listContent: {
    padding: 0,
    paddingBottom: 24,
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
    alignItems: 'center',
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  userInfo: {
    flex: 1,
  },
  designation: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
    color: '#333',
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginRight: 12,
    marginBottom: 4,
  },
  location: {
    marginLeft: 8,
  },
  chatButton: {
    //backgroundColor: '#00695C',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginLeft: 2,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
