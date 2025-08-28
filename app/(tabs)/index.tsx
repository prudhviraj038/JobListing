import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView>
       <View style={styles.container}>
        <Image
          source={require('@/assets/images/logo_right.jpeg')}
          style={styles.scrollImage}
          resizeMode="cover"
        />
        <Image
          source={require('@/assets/images/logo_center.jpeg')}
          style={styles.scrollImage}
          resizeMode="contain"
        />
        <Image
          source={require('@/assets/images/logo_left.jpeg')}
          style={styles.scrollImage}
          resizeMode="cover"
        />
      </View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.scrollContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }} 
            style={styles.scrollImage} 
            resizeMode="cover"
          />
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }} 
            style={styles.scrollImage} 
            resizeMode="cover"
          />
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }} 
            style={styles.scrollImage} 
            resizeMode="cover"
          />
        </ScrollView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">About RK's Brainstorm</ThemedText>
        <ThemedText style={styles.aboutText}>
          <ThemedText type="defaultSemiBold">RK's Brainstorm</ThemedText> is well known <ThemedText type="defaultSemiBold">Training – Consulting – Outsourcing</ThemedText> organization which is impacting qualitative training programs like <ThemedText type="defaultSemiBold">leadership skills, communication skills, managerial skills</ThemedText> to MNC's and C2C, <ThemedText type="defaultSemiBold">finishing school programs</ThemedText> to corporate companies and top educational institutions in India.
        </ThemedText>
        <ThemedText style={styles.aboutText}>
          Our experienced <ThemedText type="defaultSemiBold">training team</ThemedText> will definitely groom the Employees and students as per <ThemedText type="defaultSemiBold">BU(Business Unit)</ThemedText> requirements.
        </ThemedText>
        <ThemedText style={styles.aboutText}>
          We partner with our clients to expand their business potential by providing solutions in <ThemedText type="defaultSemiBold">Executive Search & Selection, Middle Management Hiring, Project Based Hiring and Recruitment Process Outsourcing</ThemedText> through integrated suite of leadership services. With our <ThemedText type="defaultSemiBold">six years</ThemedText> long knowledge expertise in the domain, we have been successfully able to deliver solutions for all kind of global and local business industry specific demands.
        </ThemedText>
        <ThemedText style={styles.aboutText}>
          Our strength lies in our <ThemedText type="defaultSemiBold">multifaceted team of professional consultants</ThemedText> holding credentials of being highly specialized and experienced in the industry/sectors they serve. We are associated with <ThemedText type="defaultSemiBold">best of talent</ThemedText> which are capable of harnessing new pool of talents. Our workforce culture is equipped with <ThemedText type="defaultSemiBold">new technology and techniques</ThemedText> to maintain reliable quality assurance. We understand our responsibility to change our mechanism from time to time so as to keep pace with the <ThemedText type="defaultSemiBold">changing employment scenario and skill sets demand</ThemedText>. Hence, our team is oriented towards taking timely demand and needs analysis, available and upcoming skill set in the market, talent review etc. to provide <ThemedText type="defaultSemiBold">unparallel quality service</ThemedText> to our clients.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Mission</ThemedText>
        <ThemedText style={styles.aboutText}>
          Our mission is to make the difference in the lives of the <ThemedText type="defaultSemiBold">Employees, students, Job aspirants, professionals</ThemedText> by helping them develop a <ThemedText type="defaultSemiBold">holistic personality</ThemedText> by providing essential Services on required areas to succeed on their <ThemedText type="defaultSemiBold">Professional life</ThemedText>.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Vision</ThemedText>
        <ThemedText style={styles.aboutText}>
          The vision of <ThemedText type="defaultSemiBold">RK's Brainstorm</ThemedText> is to become the <ThemedText type="defaultSemiBold">trusted brand</ThemedText> for personal transformation through <ThemedText type="defaultSemiBold">Training - Consulting - Outsourcing</ThemedText> and remembered forever for its <ThemedText type="defaultSemiBold">outstanding contribution</ThemedText> for a better Society.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  scrollContainer: {
    marginVertical: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  scrollImage: {
    width: 280,
    height: 160,
    borderRadius: 8,
    marginRight: 12,
  },
  headerLogo: {
    width: '100%',
    height: '100%',
    maxHeight: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  aboutText: {
    marginBottom: 16,
    lineHeight: 20,
  },
  container: {
    flexDirection: "row",   // horizontal alignment
    justifyContent: "center", // center horizontally
    alignItems: "center",   // align vertically
    gap: 10,                // spacing between images (RN >= 0.71)
  },
});
