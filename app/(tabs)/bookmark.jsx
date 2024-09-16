import React from 'react';
import { SafeAreaView, FlatList, Text, View, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { icons } from '../../constants';

const staticVideos = [
  {
    id: "1",
    title: "Superciencia amigos EP.1",
    thumbnail: "https://img.youtube.com/vi/haHNrH-RpJ8/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=haHNrH-RpJ8&t=737s", 
    creator: "Átomo Network",
    creatorAvatar: "https://img.youtube.com/vi/haHNrH-RpJ8/maxresdefault.jpg"
  },
  {
    id: "2",
    title: "Superciencia amigos EP.2",
    thumbnail: "https://img.youtube.com/vi/IGBagRqmG7s/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=IGBagRqmG7s", 
    creator: "Átomo Network",
    creatorAvatar: "https://img.youtube.com/vi/IGBagRqmG7s/maxresdefault.jpg"
  },
  {
    id: "3",
    title: "Superciencia amigos EP.3",
    thumbnail: "https://img.youtube.com/vi/zmCAdeCqe2U/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=zmCAdeCqe2U", 
    creator: "Átomo Network",
    creatorAvatar: "https://img.youtube.com/vi/zmCAdeCqe2U/maxresdefault.jpg"
  },
  {
    id: "4",
    title: "Superciencia amigos EP.4",
    thumbnail: "https://img.youtube.com/vi/weL-Q9s2UxA/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=weL-Q9s2UxA&list=PLEPLQ7NjJKQyMeV0nXuO7qbBetwSXV2zT&index=4", 
    creator: "Átomo Network",
    creatorAvatar: "https://img.youtube.com/vi/weL-Q9s2UxA/maxresdefault.jpg"
  },
  {
    id: "5",
    title: "Superciencia amigos EP.5",
    thumbnail: "https://img.youtube.com/vi/TSb6M_TnQGo/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=TSb6M_TnQGo&list=PLEPLQ7NjJKQyMeV0nXuO7qbBetwSXV2zT&index=5", 
    creator: "Átomo Network",
    creatorAvatar: "https://img.youtube.com/vi/TSb6M_TnQGo/maxresdefault.jpg"
  },
  {
    id: "6",
    title: "Superciencia amigos. Especial Navidad",
    thumbnail: "https://img.youtube.com/vi/7R7f9NDxEh8/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=7R7f9NDxEh8&list=PLEPLQ7NjJKQyMeV0nXuO7qbBetwSXV2zT&index=6",
    creator: "Átomo Network",
    creatorAvatar: "https://img.youtube.com/vi/7R7f9NDxEh8/maxresdefault.jpg"
  }
];

const Bookmark = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Mis Videos Favoritos en YouTube
      </Text>

      <FlatList
        data={staticVideos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <View style={styles.creatorContainer}>
              <Image
                source={{ uri: item.creatorAvatar }}
                style={styles.creatorAvatar}
              />
              <View style={styles.creatorInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.creator}>{item.creator}</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => handlePress(item.video)} style={styles.thumbnailContainer}>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.thumbnail}
              />
              <Image
                source={icons.play}
                style={styles.playIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  videoContainer: {
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1e1e1e',
    padding: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  creatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  creatorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  creatorInfo: {
    marginLeft: 12,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Poppins-Bold',
  },
  creator: {
    color: '#bbbbbb',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  thumbnailContainer: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  playIcon: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -24,
    marginTop: -24,
  },
});

export default Bookmark;
