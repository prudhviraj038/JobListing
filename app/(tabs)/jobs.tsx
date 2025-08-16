import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { Animated, FlatList, Image, ImageSourcePropType, StyleSheet, TextInput, TouchableOpacity, View, Easing } from 'react-native';

type Job = {
  id: string;
  title: string;
  company: string;
  experience: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  logo: ImageSourcePropType;
};

// Dummy data for jobs
const dummyJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    experience: '5-8 years',
    location: 'Bangalore, India',
    salary: '₹15-25 LPA',
    type: 'Full-time',
    posted: '2 days ago',
    logo: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'Digital Creations',
    experience: '3-5 years',
    location: 'Mumbai, India',
    salary: '₹10-18 LPA',
    type: 'Full-time',
    posted: '1 week ago',
    logo: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'InnovateX',
    experience: '6-9 years',
    location: 'Delhi, India',
    salary: '₹20-35 LPA',
    type: 'Full-time',
    posted: '3 days ago',
    logo: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'Cloud Systems',
    experience: '4-7 years',
    location: 'Hyderabad, India',
    salary: '₹12-22 LPA',
    type: 'Full-time',
    posted: '5 days ago',
    logo: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '5',
    title: 'Frontend Developer',
    company: 'WebCraft Studios',
    experience: '2-4 years',
    location: 'Pune, India',
    salary: '₹8-15 LPA',
    type: 'Full-time',
    posted: '1 day ago',
    logo: require('@/assets/images/placeholder-avatar.png')
  },
  {
    id: '6',
    title: 'Backend Developer',
    company: 'DataSystems',
    experience: '3-6 years',
    location: 'Chennai, India',
    salary: '₹10-20 LPA',
    type: 'Full-time',
    posted: '1 week ago',
    logo: require('@/assets/images/placeholder-avatar.png')
  }
];

export default function JobsScreen() {
  const [search, setSearch] = useState({
    title: '',
    experience: '',
    location: ''
  });
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(dummyJobs);
  const buttonScale = useRef(new Animated.Value(1)).current;

  // Handle search whenever search state changes
  const performSearch = () => {
    let filtered = [...dummyJobs];

    // If all search fields are empty, show all jobs
    if (!search.title && !search.experience && !search.location) {
      setFilteredJobs(dummyJobs);
      return;
    }

    // Filter by each search field if they have values
    if (search.title) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(search.title.toLowerCase()) ||
        job.company.toLowerCase().includes(search.title.toLowerCase())
      );
    }
    
    if (search.experience) {
      filtered = filtered.filter(job => 
        job.experience.toLowerCase().includes(search.experience.toLowerCase())
      );
    }
    
    if (search.location) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(search.location.toLowerCase())
      );
    }
    
    setFilteredJobs(filtered);
  };

  // Run search whenever search state changes
  useEffect(() => {
    performSearch();
  }, [search]);

  const renderJobItem = ({ item }: { item: Job }) => (
    <ThemedView style={styles.jobCard}>
      <Image source={item.logo} style={styles.companyLogo} />
      <View style={styles.jobInfo}>
        <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
        <ThemedText style={styles.company}>{item.company}</ThemedText>
        <View style={styles.details}>
          <ThemedText style={styles.detailText}>
            <Ionicons name="briefcase-outline" size={14} /> {item.experience}
          </ThemedText>
          <ThemedText style={[styles.detailText, styles.location]}>
            <Ionicons name="location-outline" size={14} /> {item.location}
          </ThemedText>
        </View>
        <View style={styles.jobMeta}>
          <ThemedText style={styles.salary}>
            <Ionicons name="cash-outline" size={14} /> {item.salary}
          </ThemedText>
          <ThemedText style={styles.jobType}>
            {item.type}
          </ThemedText>
          <ThemedText style={styles.posted}>
            {item.posted}
          </ThemedText>
        </View>
      </View>
      <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}>
        <TouchableOpacity 
          style={styles.applyButton}
          activeOpacity={0.9}
          onPressIn={() => {
            Animated.spring(buttonScale, {
              toValue: 0.95,
              useNativeDriver: true,
            }).start();
          }}
          onPressOut={() => {
            Animated.spring(buttonScale, {
              toValue: 1,
              friction: 3,
              tension: 40,
              useNativeDriver: true,
            }).start();
          }}
          onPress={() => {
            // Handle apply action here
            console.log('Applied to job:', item.title);
          }}
        >
          <ThemedText style={styles.applyButtonText}>
            <Ionicons name="paper-plane-outline" size={16} color="#fff" style={styles.applyIcon} />
            Apply Now
          </ThemedText>
        </TouchableOpacity>
      </Animated.View> 
    </ThemedView>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#00695C', dark: '#004D40' }}
      headerImage={
        <View style={styles.searchContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Find Your Dream Job</ThemedText>         
          <ThemedView style={styles.inputContainer}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.input}
              placeholder="Job title, company, or keywords"
              value={search.title}
              onChangeText={(text) => setSearch({...search, title: text})}
              placeholderTextColor="#999"
            />
          </ThemedView>
          
          <View style={styles.row}>
            <View style={[styles.inputContainer, styles.halfInput]}>
              <Ionicons name="briefcase-outline" size={18} color="#666" style={styles.searchIcon} />
              <TextInput
                style={[styles.input, styles.halfInputText]}
                placeholder="Experience (e.g., 3-5 years)"
                value={search.experience}
                onChangeText={(text) => setSearch({...search, experience: text})}
                placeholderTextColor="#999"
              />
            </View>
            <View style={[styles.inputContainer, styles.halfInput, {marginLeft: 8}]}>
              <Ionicons name="location-outline" size={18} color="#666" style={styles.searchIcon} />
              <TextInput
                style={[styles.input, styles.halfInputText]}
                placeholder="Location (city, state, or remote)"
                value={search.location}
                onChangeText={(text) => setSearch({...search, location: text})}
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>
      }
    >
      {/* Jobs List */}
      <View style={styles.contentContainer}>
        <FlatList
          data={filteredJobs}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <ThemedText style={styles.noResults}>
              No jobs found matching your criteria. Try adjusting your search.
            </ThemedText>
          }
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  // Search Section
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
  
  // Content
  contentContainer: {
    flex: 1,
  },
  listContent: {
    padding: 0,
    paddingBottom: 24,
  },
  
  // Job Card
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
    marginBottom: 8,
  },
  jobInfo: {
    flex: 1,
  },
  company: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#00695C',
  },
  jobMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    alignItems: 'center',
  },
  salary: {
    fontSize: 14,
    color: '#2E7D32',
    marginRight: 12,
    marginBottom: 4,
  },
  jobType: {
    fontSize: 12,
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 4,
  },
  posted: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 4,
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
  buttonContainer: {
    marginTop: 12,
    alignSelf: 'flex-start',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  applyButton: {
    backgroundColor: '#00695C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 140,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  },
  applyIcon: {
    marginRight: 8,
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
  }
});
