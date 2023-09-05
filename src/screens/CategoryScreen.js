import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const categories = navigation.getParam('categories', []);

  const renderItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image
        source={require('../assets/menswatches.jpg')} // Replace with your actual image source
        style={styles.categoryImage}
      />
      <Text style={styles.categoryText}>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={renderItem}
      numColumns={4}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 50, // Creates an oval shape
    borderWidth: 2,
    borderColor: 'purple',
  },
  categoryImage: {
    width: 60, // Adjust the image size as needed
    height: 60, // Adjust the image size as needed
    marginBottom: 8,
  },
  categoryText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
