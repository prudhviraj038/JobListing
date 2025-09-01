import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
       <View style={[styles.container, { backgroundColor: '#00695C', paddingVertical: 16 }]}>
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
      <ScrollView 
        style={{ flex: 1,padding:16 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to the Mala Community Portal!</ThemedText>
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
        <ThemedText type="subtitle">Connect - Learn - Grow</ThemedText>
        <ThemedText style={styles.aboutText}>
          We extend a warm welcome to you on this platform, created exclusively for the Mala community of Andhra Pradesh. This initiative has been envisioned to serve as a common ground where our people unite to celebrate identity, exchange knowledge, and journey toward collective progress.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Our Purpose</ThemedText>
        <ThemedText style={styles.aboutText}>
        For generations, the Mala community has stood tall with resilience, determination, and an unwavering spirit of unity. This website is a step towards further strengthening those foundations—by providing a space where we can connect meaningfully, learn from one another, and grow together in spirit, knowledge, and opportunity.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">What We Aspire To Achieve</ThemedText>
        <ThemedText style={styles.aboutText}>
          <ThemedText type="defaultSemiBold">• Connection:</ThemedText> Bringing together members across regions to build strong networks rooted in solidarity and mutual respect.
          {'\n\n'}
          <ThemedText type="defaultSemiBold">• Learning:</ThemedText> Fostering knowledge-sharing, education, and awareness that empower individuals and inspire future generations.
          {'\n\n'}
          <ThemedText type="defaultSemiBold">• Growth:</ThemedText> Encouraging avenues for professional, social, and cultural development that uplift both individuals and the entire community.
          {'\n\n'}
          <ThemedText type="defaultSemiBold">• Cultural Pride:</ThemedText> Honouring our traditions, values, and achievements while embracing progress in every sphere of life.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Our Vision</ThemedText>
        <ThemedText style={styles.aboutText}>
        To nurture a progressive Mala community—united by heritage, inspired by knowledge, and driven toward excellence—so that every individual finds both strength and opportunity within the collective.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Join Hands in the Journey</ThemedText>
        <ThemedText style={styles.aboutText}>
        This platform belongs to all of us. It is more than a website—it is a movement toward empowerment, solidarity, and shared success. Together, let us ensure that the Mala community continues to shine as a beacon of resilience and growth.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Let us connect, let us learn, and let us grow—together, for a brighter tomorrow.
        </ThemedText>
      </ThemedView>
      </ScrollView>
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
